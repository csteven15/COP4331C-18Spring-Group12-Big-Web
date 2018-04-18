import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from '../../services/firebase.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  @Output() createComponent = new EventEmitter<string>();

  constructor(
    private firebaseService: FirebaseService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
  }

  changeComponent(type: string) {
    this.createComponent.emit(type);
    return;
  }

}
