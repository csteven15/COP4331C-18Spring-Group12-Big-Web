import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { Observable } from 'rxjs/Observable';
import { Event } from '../../models/event';
import { User } from '../../models/user';

// TODO: Move all form functionality to separate component

@Component({
  selector: 'app-maps-events-list',
  templateUrl: './maps-events-list.component.html',
  styleUrls: ['./maps-events-list.component.css']
})
export class MapsEventsListComponent implements OnInit, OnChanges {
  @Input() events: Event[];
  @Input() latitude: any;
  @Input() longitude: any;
  @Input() user: User;

  @Output() eventsChange = new EventEmitter<Event[]>(); 
  @Output() flyTo = new EventEmitter<Event>();

  eventForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private firebaseService: FirebaseService) { }

  ngOnInit() { this.buildForm(); }

  ngOnChanges(changes: SimpleChanges)
  {
	var updatedEvents = changes["events"];
	var updatedLatitude = changes["latitude"];
	var updatedLongitude = changes["longitude"];
	var updatedUser = changes["user"];

	if(updatedEvents != null) 
	{ 
		this.events = updatedEvents.currentValue; 
	}
	if(updatedLatitude != null) 
	{ 
		this.latitude = updatedLatitude.currentValue; 
		this.eventForm.patchValue({
	        latitude: this.latitude
	    });
	}
	if(updatedLongitude != null) 
	{ 
		this.longitude = updatedLongitude.currentValue; 
		this.eventForm.patchValue({
        	longitude: this.longitude
      	});
	}
	if(updatedUser != null) 
	{ 
		this.user = updatedUser.currentValue; 
	}
	return;
  }

  buildForm() {
    this.eventForm = this.fb.group({
      'name': ['', [Validators.required]],
      'description': ['', [Validators.required]],
      'latitude': ['', [Validators.required]],
      'longitude': ['', [Validators.required]]
    });
  }

  flyToOnClick(event: Event) { this.flyTo.emit(event); }


  like(): any { console.log("like function called"); }
  
  deleteEvent(event: Event)
  {
  	this.firebaseService.deleteEvent(event);
  	var index = this.events.indexOf(event);
  	this.events.splice(index, 1);
  	this.eventsChange.emit(this.events);
  }

  registerEvent() 
  {
    // users
    const data: Event = {
      uid: this.user.uid,
      name: this.eventForm.value['name'],
      description: this.eventForm.value['description'],
      longitude: this.longitude,
      latitude: this.latitude
    };

    this.firebaseService.addEvent(data);
    this.events.push(data);
    this.eventsChange.emit(this.events);
  }


}
