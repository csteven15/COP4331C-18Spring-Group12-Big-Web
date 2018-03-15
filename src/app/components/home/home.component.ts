import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() authenticationStatus: boolean;
  @Output() authenticationStatusChange = new EventEmitter<boolean>();
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  	this.firebaseService.getUser().subscribe(user => {
      console.log(user);
      this.authenticationStatus = (user == null) ? false : true;
      this.authenticationStatusChange.emit(this.authenticationStatus);
      console.log("home page authenticationStatus = " + this.authenticationStatus);
  	});
  }

}
