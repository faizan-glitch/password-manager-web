import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _auth: AngularFireAuth, private _router: Router) { }

  canActivate(): Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      this._auth.onAuthStateChanged(user => {
        if (user) { resolve(true) }
        else {
          this._router.navigateByUrl('');
          resolve(false);
        }
      })
    })
  }
}
