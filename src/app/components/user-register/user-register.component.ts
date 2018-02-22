import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from '../../services/firebase.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  users: User[];

  constructor(
    private afAuth: AngularFireAuth,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    this.firebaseService.getUsers().subscribe(users => {
      console.log(users);
    });
  }

  registerUser() {

  }

}
