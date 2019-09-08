import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { User } from '../user.model';


import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  constructor(
    private fauth: AngularFireAuth,
    private fstore: AngularFirestore,
    private router: Router
  ) { 
    this.user$ = this.fauth.authState.pipe(
      switchMap(user => {
        if(user){
          return this.fstore.doc<User>('users/${users.uid}').valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.fauth.auth.signInWithPopup(provider);
    return this.router.navigate(['./../subheader']);
    //return this.updateUserData(credential.user);
  }

  async signOut(){
    this.fauth.auth.signOut();
    return this.router.navigate(['/']);
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.fstore.doc(`users/${user.uid}`);

    const data = { 
      uid: user.uid, 
      email: user.email, 
      displayName: user.displayName, 
      photoURL: user.photoURL
    } 
    this.navigate();
    return userRef.set(data, { merge: true })
  }

  navigate(){
    this.router.navigate(['/']);
  }
}
