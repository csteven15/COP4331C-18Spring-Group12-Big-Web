import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../environments/environment';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Event } from '../models/event';


@Injectable()
export class MapService {

  eventsCollection: AngularFirestoreCollection<Event>;
  events: Observable<Event[]>;
  eventDocument: AngularFirestoreDocument<Event>;

  id: string;

  constructor(private afs: AngularFirestore) {
    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set(environment.mapbox.accessToken);
    // mapboxgl.accessToken = environment.mapbox.accessToken
    // this.eventsCollection = afs.collection<Event>('events');
    // this.events = this.eventsCollection.valueChanges();

    this.eventsCollection = this.afs.collection('events');

    this.events = this.eventsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Event;
        this.id = a.payload.doc.id;
        return data;
      });
    });
    // console.log('data');
    // console.log(this.id);
  }

  createMarker(data: Event) {
    this.eventsCollection.add(data);
    // this.updateEventData(data);
  }

  // updateEventData(event: Event) {
  //   // const eventRef: AngularFirestoreDocument<Event> = this.afs.doc(`events/${event.eid}`);
  //
  //   this.eventDocument = this.afs.doc(`events/${event.eid}`);
  //   console.log('events document')
  //   console.log(this.id);
  //   console.log(this.eventDocument);
  //   this.eventDocument.update(event);
  // }

}
