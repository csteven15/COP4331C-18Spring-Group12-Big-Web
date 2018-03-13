import { environment } from '../environments/environment';

// Angular
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Firebase
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

// Modules
import { FlashMessagesModule } from 'angular2-flash-messages';


// Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

import { UserFormComponent } from './components/user-form/user-form.component';
import { MapsComponent } from './components/maps/maps.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

// Services
import { MapService } from './services/map.service';
import { FirebaseService } from './services/firebase.service';
import { NotifyService } from './services/notify.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user-register', component: UserRegisterComponent},
  {path: 'user-login', component: UserLoginComponent},
  {path: 'user-form', component: UserFormComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'user-dashboard', component: UserDashboardComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    MapsComponent,
    UserRegisterComponent,
    UserLoginComponent,
    UserFormComponent,
    UserProfileComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [FirebaseService, NotifyService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
