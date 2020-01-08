import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  constructor(public afAuth: AngularFireAuth, public router: Router, private ngZone: NgZone) { }

  signIn(email: string, password: string) {
   return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(
          res => {
            resolve(res);
            console.log(res);
            localStorage.setItem('user', 'ok');
            this.router.navigate(['/home']);
          },
          err => reject(err)
        );
    });
  }

  signUp(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(
          res => {
            resolve(res);
            console.log(res);
            localStorage.setItem('user', 'ok');
            this.router.navigate(['/home']);
          },
          err => reject(err)
        );
    });
  }

  googleLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth.signInWithPopup(provider).then(res => {
        resolve(res);
        this.ngZone.run(() => {
          this.router.navigate(['/home']);
        });
      });
    });
  }

  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  public isAuthenticated() {
    if (localStorage.getItem('user') == null) {
      return false;
    } else {
      return true;
    }
  }

}
