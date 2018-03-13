import { Component, OnInit, Directive, Renderer2, ElementRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { User } from '../../models/user';
import { Event } from '../../models/event';
import { FirebaseService } from '../../services/firebase.service';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})


export class MapsComponent implements OnInit {

  private nativeElement: Node;

  // UCF coordinates
  lat: number = 28.6024;
  lng: number = -81.2001;
  zoom: number = 15;

  user: any;


  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  message = 'Hello World!';
  center: [-81.20031, 28.60125];


  // data
  source: any;
  markers: any;

  events: any;
  event: Event = {
    eid: '',
    uid: '',
    name: '',
    description: '',
    longitude: '',
    latitude: ''
  }

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private firebaseService: FirebaseService) {
  }

  ngOnInit() {
    this.initializeMap()
    this.user = this.firebaseService.getUser().subscribe(user => {
      // console.log(user);
      this.user = user;
    });

    // this.firebaseService.getEvents().subscribe(events => {
    //   this.events = events;
    // });
  }

  private initializeMap() {
    console.log(this.events);
    /// locate the user
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(position => {
    //     this.lat = position.coords.latitude;
    //     this.lng = position.coords.longitude;
    //     this.map.flyTo({
    //       center: [this.lng, this.lat]
    //     })
    //   });
    // }

    this.buildMap()

  }


  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 15,
      center: [this.lng, this.lat]
    });


    /// Add map controls
    // this.map.addControl(new mapboxgl.NavigationControl());


    // //// Add Marker on Click
    // this.map.on('click', (event) => {
    //   const coordinates = [event.lngLat.lng, event.lngLat.lat]
    //   console.log(coordinates);
    //
    //   const newMarker: Event = {
    //     uid: this.user.uid,
    //     name: '',
    //     description: '',
    //     longitude: event.lngLat.lng,
    //     latitude: event.lngLat.lat
    //   }
    //   this.firebaseService.addEvent(newMarker)
    // });


    /// Add realtime firebase data on map load
    this.map.on('load', (event) => {
      this.firebaseService.getEvents().subscribe(events => {
        this.events = events;
        for (var i = 0; i < events.length; i++) {
          var popup = new mapboxgl.Popup()
            .setHTML('<p class="wordwrap"><strong>' + events[i].name + '</strong></p><p class="wordwrap">' + events[i].description + '</p>');
          var lng = parseFloat(events[i].longitude)
          var lat = parseFloat(events[i].latitude)
          var marker = new mapboxgl.Marker()
            .setLngLat([lng, lat])
            .setPopup(popup)
            .addTo(this.map);
        }
      });

    });

  }

  flyTo(data: Event) {
    this.lng = parseFloat(data.longitude)
    this.lat = parseFloat(data.latitude)
    this.map.flyTo({
      center: [this.lng, this.lat]
    })
  }

  deleteEvent(data: Event) {
    this.firebaseService.deleteEvent(data);
  }

}
