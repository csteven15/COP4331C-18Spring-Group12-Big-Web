import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Event } from '../../models/event';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() events: Event[];
  @Output() eventsChange = new EventEmitter<Event[]>();


  constructor(
    private router: Router,
    public afAuth: AngularFireAuth,
    private firebaseService: FirebaseService
    ) { }

  ngOnInit() {
    this.firebaseService.getEvents().subscribe(events => {
      this.events = events;
      this.eventsChange.emit(this.events);
      console.log("navigation components = ");
      console.log(this.events);
    });
  }

  updateEvents(updated_events: Event[]) {
    this.events = updated_events;
    this.eventsChange.emit(this.events);
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.EmailAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
