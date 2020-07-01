import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
// import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireAuth } from '@angular/fire/auth';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _auth: AngularFireAuth, private _snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  email: string;
  password: string;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);
  
  matcher = new MyErrorStateMatcher();

  signup(): void {
    this._auth
      .createUserWithEmailAndPassword(this.email, this.password)
      .then(user => {
        this._snackbar.open("Account created successfully", "Dismiss", {
          duration: 4000
        })     
      })
      .catch(err => {
        console.log(err);
        this._snackbar.open(err, "Dismiss", {
          duration: 4000
        })
      }
      );
  }

}
