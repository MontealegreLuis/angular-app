import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  color: String;

  constructor() {
    this.color = 'blue';
  }

  ngOnInit() {
  }

  echo(color: String) {
    console.log(color);
  }
}
