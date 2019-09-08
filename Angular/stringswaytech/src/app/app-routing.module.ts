import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfilesectionComponent} from './profilesection/profilesection.component';
import {HomepageComponent} from './homepage/homepage.component';
import { PhysicsComponent } from './course/physics/physics.component';
import { EngmechanicsComponent } from './course/engmechanics/engmechanics.component';
import { EvsComponent } from './course/evs/evs.component';
import {SubheaderComponent} from './subheader/subheader.component';
import {ChemistryComponent} from './course/chemistry/chemistry.component';
import {MainheaderComponent} from './mainheader/mainheader.component';
import {MathComponent} from './course/math/math.component';
import {BEEComponent} from './course/bee/bee.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
	{path: 'evs',component:EvsComponent},
	{path: 'user-profile',component:UserProfileComponent},

	{
		path: 'subheader',
		children:[
		{path:'',component:SubheaderComponent},
			{path: 'engmechanics',component:EngmechanicsComponent},
			{path: 'physics',component:PhysicsComponent},
			{path: 'evs',component:EvsComponent},
			{path: 'chemistry',component:ChemistryComponent},
			{path: 'math',component:MathComponent},
			{path: 'bee',component:BEEComponent},
		]
		},

		{
		path: 'mainheader',
		children:[
		{path:'',component:SubheaderComponent},
			{path: 'engmechanics',component:EngmechanicsComponent},
			{path: 'physics',component:PhysicsComponent},
			{path: 'evs',component:EvsComponent},
			{path: 'chemistry',component:ChemistryComponent},
			{path: 'math',component:MathComponent},
			{path: 'bee',component:BEEComponent},
		]
		},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
