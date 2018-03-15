import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() authenticationStatus: boolean;
  @Output() authenticationStatusChange = new EventEmitter<boolean>();

  events: Event[];
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
    this.firebaseService.getEvents().subscribe(events => {
      console.log(events);
      this.events = events;
    });

    this.firebaseService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
      this.authenticationStatus = (this.user == null) ? false : true;
      this.authenticationStatusChange.emit(this.authenticationStatus);
      console.log("on user profile page loaded authenticationStatus = " + this.authenticationStatus);
    });
    console.log(this.user);

  }

  registerEvent() {
    // users
    const data: Event = {
      name: this.eventForm.value['name'],
      description: this.eventForm.value['description'],
      longitude: this.eventForm.value['longitude'],
      latitude: this.eventForm.value['latitude']
    };
    this.firebaseService.addEvent(data);
    //this.firebaseService.getUser();
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
