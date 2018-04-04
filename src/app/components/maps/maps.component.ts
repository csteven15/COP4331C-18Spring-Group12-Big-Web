import { Component, OnInit, ElementRef, ViewChild, Renderer, Input, Output, 
  EventEmitter, OnChanges, SimpleChanges, AfterContentInit, Renderer2 } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine'
import { FirebaseService } from '../../services/firebase.service';
import { Observable } from 'rxjs/Observable';
import { Event } from '../../models/event';
import { User } from '../../models/user';
import { MapsEventsListComponent } from '../maps-events-list/maps-events-list.component';
import { switchMap } from 'rxjs/operators';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit, OnChanges, AfterContentInit {
  @Input() mapEvents: Event[];
  @Output() eventsChange = new EventEmitter<Event[]>();


  // UCF coordinates
  lat: number = 28.6024;
  lng: number = -81.2001;
  zoom: number = 15;
  events: any;
  event: Event = {
    eid: '',
    uid: '',
    name: '',
    description: '',
    longitude: '',
    latitude: ''
  }
  eventForm: FormGroup;

  mouselat: any;
  mouselng: any;
  user;
  map;

  userEvents: any;

  constructor(private fb: FormBuilder, 
    private firebaseService: FirebaseService) { }

  ngOnInit() 
  {
    this.initializeMap();
    this.getMarkers();

    console.log("Map events OnInit: ");
    console.log(this.mapEvents);

    this.user = this.firebaseService.getUser().subscribe(user => {
      this.user = user;
      this.userEvents = this.firebaseService.getEvents().subscribe(events => {
        let userEvents = new Array();
        for (var i = 0; i < events.length; i++) {
          if (events[i].uid == this.user.uid) {
            userEvents.push(events[i]);
          }
        }
        this.userEvents = userEvents;
      });
    });
  }

  ngOnChanges(changes: SimpleChanges)
  {
    console.log(" Map ngOnChanges called");
    var change = changes["mapEvents"].currentValue
    // if(change == this.mapEvents) 
    // { 
    //   console.log("No changes")
    //   return; 
    // }

    console.log("Map events before ngOnChanges ");
    this.mapEvents = change;
    console.log("Map events after ngOnChanges ");
    console.log(this.mapEvents);

    this.updateMarkers();
    return;
  }

  ngAfterContentInit()
  {

  }

  updateMarkers()
  {
    if(this.mapEvents != null )
    {
      for(var i=0; i<this.mapEvents.length; i++)
      {
        console.log(this.mapEvents[i])
        var lng = parseFloat(this.mapEvents[i].longitude);
        var lat = parseFloat(this.mapEvents[i].latitude);
        var popupContent = '<div><p class="wordwrap"><strong>' + this.mapEvents[i].name + '</strong></p><p class="wordwrap">' + this.mapEvents[i].description + '</p><button class="like-button" class="btn btn-primary">Like</button></div>'

        var marker = new L.marker({ lng, lat })
          .bindPopup(popupContent, { maxWidth: 250 })
          .addTo(this.map);
      }
    }
    return;
  }

  private initializeMap() {
    this.buildMap();
  }

  buildMap() {
    var UCFcoords = L.latLng(28.6014, -81.2001);
    var topLeft = L.latLng(28.6116, -81.2073);
    var bottomRight = L.latLng(28.5912, -81.1929);
    var bounds = L.latLngBounds(topLeft, bottomRight);

    var mymap = L.map('mapid', {
      center: UCFcoords,
      zoom: 16,
      //  minZoom: 16,
      //  maxBounds: bounds
    });
    this.map = mymap;

    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoibm90YWthbmUiLCJhIjoiY2plNHdqeXphMnBjbzJ4bW9kNDJxZHk2eSJ9.pViraf7NrFYgzmnqTd_vgQ', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
    }).addTo(mymap);

    var prevDirections = 0;
    var directions;
    var userloc;

    // this.map.locate({
    // }).on("locationfound", e => {
    //   userloc = e.latlng;
    //   new L.marker(userloc).addTo(mymap);
    // });



    this.map.on('click', click => {
      this.getMarkers();

      var coordDest = mymap.mouseEventToLatLng(click.originalEvent);
      // const newMarker: Event = {
      //   uid: this.user.uid,
      //   name: this.eventForm.value['name'],
      //   description: this.eventForm.value['description'],
      //   longitude: coordDest.lng,
      //   latitude: coordDest.lat
      // }
      this.mouselat = coordDest.lat;
      this.mouselng = coordDest.lng;

      // this.firebaseService.addEvent(newMarker);

      // add markers
      this.firebaseService.user.subscribe(user => {
        if (user == null) {
          console.log('no user');
        } else {
          var popup = L.popup()
            .setLatLng(coordDest)
            .setContent('<h6>You will be placing a marker here</h6>')
            .openOn(mymap);
        }
      })

      // var marker = L.marker(coordDest).addTo(mymap);
      // console.log(coordDest.lat + ', ' + coordDest.lng);
      this.getMarkers();

    });
  }

  getMarkers() {
    if(this.mapEvents != null )
    {
      for(var i=0; i<this.mapEvents.length; i++)
      {
        // console.log(this.mapEvents[i])
        var lng = parseFloat(this.mapEvents[i].longitude);
        var lat = parseFloat(this.mapEvents[i].latitude);
        var popupContent = '<div><p class="wordwrap"><strong>' + this.mapEvents[i].name + '</strong></p><p class="wordwrap">' + this.mapEvents[i].description + '</p><button class="like-button" class="btn btn-primary">Like</button></div>'

        var marker = new L.marker({ lng, lat })
          .bindPopup(popupContent, { maxWidth: 250 })
          .addTo(this.map);
        // var likeButton = this.elementRef.nativeElement.querySelector(".like-button");
        // if(likeButton != null)
        // {
        //   likeButton.addEventListener('click', this.like())
        // } 
      }
      return;
    }   
  }


  // maps events list functions

  onEventsChange(updatedEvents: Event[]) 
  {
    this.eventsChange.emit(updatedEvents)
  }

  flyTo(data: Event) {
    // console.log(data.longitude)
    // console.log(data.latitude)
    this.lng = parseFloat(data.longitude)
    this.lat = parseFloat(data.latitude)
    var latlng = L.latLng(this.lat, this.lng)
    console.log(latlng)
    this.map.flyTo(latlng, 20)
  }

}
