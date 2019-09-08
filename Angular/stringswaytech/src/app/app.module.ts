import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilesectionComponent } from './profilesection/profilesection.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PhysicsComponent } from './course/physics/physics.component';
import { EngmechanicsComponent } from './course/engmechanics/engmechanics.component';
import { EvsComponent } from './course/evs/evs.component';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { MainpagebodyComponent } from './mainpagebody/mainpagebody.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { FeedbackformComponent } from './feedbackform/feedbackform.component';
import { ChemistryComponent } from './course/chemistry/chemistry.component';
import { MathComponent } from './course/math/math.component';
import { BEEComponent } from './course/bee/bee.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const firebaseConfig = {
  apiKey: "AIzaSyBxrjteD1sx_hKyJxbgU5OiD7gKK_8Do3k",
  authDomain: "website-login-abf6d.firebaseapp.com",
  databaseURL: "https://website-login-abf6d.firebaseio.com",
  projectId: "website-login-abf6d",
  storageBucket: "website-login-abf6d.appspot.com",
  messagingSenderId: "262345683353",
  appId: "1:262345683353:web:937e01452096e1d4"
};

@NgModule({
  declarations: [
    AppComponent,
    ProfilesectionComponent,
    HomepageComponent,
    PhysicsComponent,
    EngmechanicsComponent,
    EvsComponent,
    MainheaderComponent,
    MainpagebodyComponent,
    SubheaderComponent,
    FeedbackformComponent,
    ChemistryComponent,
    MathComponent,
    BEEComponent,
    UserProfileComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,

    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
