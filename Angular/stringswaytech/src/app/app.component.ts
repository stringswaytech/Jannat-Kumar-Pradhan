import { Component } from '@angular/core';
import {Router} from '@angular/router';

import { auth } from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stringswaytech';

  constructor(public router:Router){}
}
