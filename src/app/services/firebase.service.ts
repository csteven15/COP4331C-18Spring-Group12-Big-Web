import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../models/User';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';




@Injectable()
export class FirebaseService {

  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(
    private afAuth: AngularFireAuth,
    public afs: AngularFirestore
  ) {
    this.users = this.afs.collection('users').valueChanges();
  }

  getUsers() {
    return this.users;
  }

}
