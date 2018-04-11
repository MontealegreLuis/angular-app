import {Component, OnInit} from '@angular/core';
import {WidgetsService} from './widgets.service';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
  providers: [WidgetsService]
})
export class WidgetsComponent implements OnInit {
  selectedWidget: { id: number; name: string; description: string };
  widgets: { id: number; name: string; description: string }[];

  constructor(private widgetsService: WidgetsService) {
  }

  ngOnInit(): void {
    this.widgets = this.widgetsService.widgets;
    this.reset();
  }

  reset() {
    this.selectedWidget = {id: 0, name: '', description: ''};
  }

  save(widget) {
    this.widgets.push(widget);
    this.reset();
  }

  selected(widget) {
    this.selectedWidget = widget;
  }

  cancel() {
    this.reset();
  }
}
