import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild('drawer', {static: true}) input: MatDrawer;
  @Input() drawerState: boolean;

  constructor() { }

  ngOnInit() {
    this.input.open();
  }
  showFiller = false;

  toggleDrawer() {
    this.input.toggle();
  }

}
