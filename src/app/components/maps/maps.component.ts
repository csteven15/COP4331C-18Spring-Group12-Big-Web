import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine'

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

  constructor() { }

  ngOnInit() {

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

     L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoibm90YWthbmUiLCJhIjoiY2plNHdqeXphMnBjbzJ4bW9kNDJxZHk2eSJ9.pViraf7NrFYgzmnqTd_vgQ', {
              attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          }).addTo(mymap);

      var prevDirections = 0;
      var directions;
      var userloc;

      mymap.locate({
          }).on("locationfound", e => {
              userloc = e.latlng;
              new L.marker(userloc).addTo(mymap);
          });

      mymap.on('click', function(ev){
        if(prevDirections != 0) {
            mymap.removeControl(directions);
          }

            var coordDest = mymap.mouseEventToLatLng(ev.originalEvent);

            console.log(coordDest.lat + ', ' + coordDest.lng);

            let options = { profile: 'mapbox/walking' }
            directions = L.Routing.control
            ({
                waypoints: [
                    L.latLng(userloc),
                    L.latLng(coordDest)
                              ],
                units: 'imperial',
                fitSelectedRoutes: true,
                routeWhileDragging:true,
                show: true,
                router: L.Routing.mapbox('pk.eyJ1Ijoibm90YWthbmUiLCJhIjoiY2plNHdqeXphMnBjbzJ4bW9kNDJxZHk2eSJ9.pViraf7NrFYgzmnqTd_vgQ', options)
            }).addTo(mymap);

            prevDirections  = 1;
          });

    }
}
