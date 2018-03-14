import { Component, OnInit } from '@angular/core';
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
export class UserProfileComponent implements OnInit {

  events: any;
  event: Event = {
    name: '',
    description: '',
    longitude: '',
    latitude: ''
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
      this.events = this.firebaseService.getEvents().subscribe(events => {
        let userEvents = new Array();
        for (var i = 0; i < events.length; i++) {
          if (events[i].uid == this.user.uid) {
            userEvents.push(events[i]);
          }
        }
        this.events = userEvents;
      });
    });


  }

  registerEvent() {
    // users
    const data: Event = {
      uid: this.user.uid,
      name: this.eventForm.value['name'],
      description: this.eventForm.value['description'],
      longitude: this.eventForm.value['longitude'],
      latitude: this.eventForm.value['latitude']
    };
    this.firebaseService.addEvent(data);
  }

  buildForm() {
    this.eventForm = this.fb.group({
      'name': ['', []],
      'description': ['', []],
      'longitude': ['', []],
      'latitude': ['', []]
    });
  }



}
