import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../../models/event';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() events: Event[];
  @Output() parentEventsChange = new EventEmitter<Event[]>();
  
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  	// this.firebaseService.getEvents().subscribe(events => {
  	// 	this.mapEvents = events;
  	// 	console.log("home page events with subscribe = ");
  	// 	console.log(this.mapEvents);
  	// });
  }

  eventsChange(updated_events: Event[]){ 
  	this.events = updated_events; 
  	this.parentEventsChange.emit(this.events);
  	console.log("Updated home component events: ");
  	console.log(this.events);
  }

  childEventsChange(updated_events: Event[]){
  	this.events = updated_events; 
  	// this.parentEventsChange.emit(this.events);
  	console.log("Updated home component events: ");
  	console.log(this.events);
  }

}
