import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapService } from '../../services/map.service';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { User } from '../../models/user';
import { Event } from '../../models/event';
import { FirebaseService } from '../../services/firebase.service';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  // UCF coordinates
  lat: number = 28.6024;
  lng: number = -81.2001;
  zoom: number = 15;

  user: any;


  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  message = 'Hello World!';
  center: [-81.20031,28.60125];


  // data
  source: any;
  markers: any;

  events: Event[];
  event: Event = {
    eid: '',
    uid: '',
    name: '',
    description: '',
    longitude: '',
    latitude: ''
  }

  constructor(
    private mapService: MapService,
    private firebaseService: FirebaseService) {
  }

  ngOnInit() {
    this.initializeMap()
    this.user = this.firebaseService.getUser().subscribe(user => {
      // console.log(user);
      this.user = user;
    });
    this.firebaseService.getEvents().subscribe(events => {
      console.log(events);
      this.events = events;
    });
  }

  private initializeMap() {
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
    this.map.addControl(new mapboxgl.NavigationControl());


    //// Add Marker on Click
    this.map.on('click', (event) => {
      const coordinates = [event.lngLat.lng, event.lngLat.lat]
      console.log(coordinates);

      const newMarker: Event = {
        uid: this.user.uid,
        name: '',
        description: '',
        longitude: event.lngLat.lng,
        latitude: event.lngLat.lat
      }
      this.mapService.createMarker(newMarker)
    })


    /// Add realtime firebase data on map load
    this.map.on('load', (event) => {
    console.log(this.events.length);
    for (var i = 0; i < this.events.length; i++) {
      var lng = parseFloat(this.events[i].longitude)
      var lat = parseFloat(this.events[i].latitude)
      var marker = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(this.map);
    }

    })

  }

}
