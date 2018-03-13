import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FirebaseService } from '../../services/firebase.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth,
    private firebaseService: FirebaseService
    ) { }

  ngOnInit() {
  }

  home() {
    this.router.navigate([''];
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.EmailAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
