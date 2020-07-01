import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
 
  @Input() sideNav: SidenavComponent;

  constructor(private _auth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }
  
  logoutUser() {
    this._auth.signOut()
      .then(res => {
        this.router.navigateByUrl('');
      })
  }
  
  toggle() {
    this.sideNav.toggleDrawer();
  }
  
}
