import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  resetEmail:string;

  reset(): void {
    console.log("Password Reset")
  }
}
