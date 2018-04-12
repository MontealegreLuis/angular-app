import {Component, OnInit} from '@angular/core';
import {WidgetsService} from './widgets.service';
import {Widget} from './widget.model';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
  providers: [WidgetsService]
})
export class WidgetsComponent implements OnInit {
  selectedWidget: Widget;
  widgets: Widget[];

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

  selectWidget(widget) {
    this.selectedWidget = widget;
  }

  deleteWidget(widget) {
    console.log('deleting widget', widget);
  }

  cancel() {
    this.reset();
  }
}
