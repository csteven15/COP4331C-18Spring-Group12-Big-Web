import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
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
export class NavigationComponent {
  // @Input() events: Event[];
  // @Output() eventsChange = new EventEmitter<Event[]>();
  @Output() createComponent = new EventEmitter<string>();


  constructor(
    private router: Router,
    public afAuth: AngularFireAuth,
    private firebaseService: FirebaseService
    ) { }

  ngOnInit() {
    // this.firebaseService.getEvents().subscribe(events => {
    //   this.events = events;
    //   this.eventsChange.emit(this.events);
    //   console.log("navigation components = ");
    //   console.log(this.events);
    // });
  }

  ngOnChanges(changes: SimpleChanges)
  {
    // console.log("Navbar ngOnChanges called");
    // var updatedEvents = changes["events"].currentValue;
    // if(this.events == updatedEvents || updatedEvents == null) { return; }
    // this.events = updatedEvents;
    // console.log("Navbar events after ngOnChanges: ");
    // console.log(this.events);
    // this.eventsChange.emit(this.events);
    // return;
  }

  changeComponent(type: string)
  {
    this.createComponent.emit(type);
    return;
  }

}
