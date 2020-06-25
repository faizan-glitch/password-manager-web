import { Component, OnInit } from '@angular/core';
import { HomeBackgroundComponent } from '../home-background/home-background.component';

export interface Tile {
  color?: string;
  cols: number;
  rows: number;
  text: string;
  component?: any;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 4 },
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    // {text: 'Three', cols: 3, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 3, color: '#DDBDF1'},
  ];

}
