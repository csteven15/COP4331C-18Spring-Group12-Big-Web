import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from '../../services/firebase.service';
import { Event } from '../../models/event';
import { User } from '../../models/user';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnChanges
{
  @Input() events: Event[];
  @Output() onEventsChange = new EventEmitter<Event[]>();

  event: Event = {
    name: '',
    description: '',
    longitude: 0,
    latitude: 0,
    like: 0,
    dislike:0
  }

  eventForm: FormGroup;

  user: any;

  constructor(
    private firebaseService: FirebaseService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();

    this.user = this.firebaseService.getUser().subscribe(user => {
      this.user = user;
    });

    // this.user = this.firebaseService.getUser().subscribe(user => {
    //   this.user = user;
    //   this.events = this.firebaseService.getEvents().subscribe(events => {
    //     let userEvents = new Array();
    //     for (var i = 0; i < events.length; i++) {
    //       if (events[i].uid == this.user.uid) {
    //         userEvents.push(events[i]);
    //       }
    //     }
    //     this.events = userEvents;
    //   });
    // });
  }

  ngOnChanges(changes: SimpleChanges)
  {
    console.log("Profile ngOnChanges called");
    var updatedEvents = changes["events"].currentValue;
    // if(this.events == updatedEvents || updatedEvents == null) { return; }
    this.events = updatedEvents;
    console.log("Profile events after ngOnChanges: ");
    console.log(this.events);

    var userEvents = []
    for (var i = 0; i < this.events.length; i++)
    {
      if (this.events[i].uid == this.user.uid)
        {
          userEvents.push(this.events[i]);
        }
    }
    this.events = userEvents;
    return;
  }

  eventsChange(updatedEvents: Event[]) {
    // this.events = updatedEvents;
    // console.log("Updated profile component events: ");
    // console.log(this.events);

    // var userEvents = []
    // for (var i = 0; i < this.events.length; i++)
    // {
    //   if (this.events[i].uid == this.user.uid)
    //     {
    //       userEvents.push(this.events[i]);
    //     }
    // }
    // this.events = userEvents;
    // return;
  }

  registerEvent() {
    // users
    const data: Event = {
      uid: this.user.uid,
      name: this.eventForm.value['name'],
      description: this.eventForm.value['description'],
      longitude: this.eventForm.value['longitude'],
      latitude: this.eventForm.value['latitude'],
      like: 0,
      dislike: 0
    };
    this.firebaseService.addEvent(data);

    // emit event changes
    this.firebaseService.getEvents().subscribe(events => {
      this.events = events;
      this.onEventsChange.emit(this.events);
      console.log("Profile events after register: ");
      console.log(this.events);
    });
  }

  likeUpdate(event: Event) {

    event.like++;
    this.user.likes[0] = "event.eid";
    this.firebaseService.updateEvent(event);
    this.firebaseService.updateUserData(this.user);
  }

  dislikeUpdate(event: Event) {
    event.dislike++;
    this.firebaseService.updateEvent(event);

    if(event.dislike - event.like >= 10)
    this.firebaseService.deleteEvent(event);
  }

  buildForm() {
    this.eventForm = this.fb.group({
      'name': ['', []],
      'description': ['', []],
      'longitude': ['', []],
      'latitude': ['', []],
      'like': ['', []],
      'dislike': ['', []]
    });
  }
}
