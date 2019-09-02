import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BEEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
