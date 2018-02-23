import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  lat: number = 28.6024;
  lng: number = -81.2001;

  constructor() { }

  ngOnInit() {
  }

}
