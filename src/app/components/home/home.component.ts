import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { Event } from '../../models/event';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges{
  @Input() events: Event[];
  @Output() onEventsChange = new EventEmitter<Event[]>(); // outputs to root component
  
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit()
  {
    console.log("Home ngOnInit Called");
    console.log("Home events OnInit: ");
    console.log(this.events);
    // this.firebaseService.getEvents().subscribe(events => {
    //   this.events = events;
    //   console.log("Home events after ngAfterContentInit: ");
    //   console.log(this.events);
    // },error => {
    //   console.log(error);
    // });
  }

  ngOnChanges(changes: SimpleChanges)
  {
    console.log("Home ngOnChanges called");
    var change = changes["events"].currentValue;
    // if(change == this.events) 
    // {
    //   console.log("No changes");
    //   return;
    // }
    console.log("Home events after ngOnChanges: ");
    this.events = change;
    console.log(this.events);
    return;
  }

  // receives output from maps component
  eventsChange(updatedEvents: Event[])
  { 
    console.log("Home received events change from maps: ")
  	this.events = updatedEvents; 
  	console.log("Home events after update: ");
  	console.log(this.events);
    this.onEventsChange.emit(this.events)
  }
}
