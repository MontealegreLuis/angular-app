import {Component, OnInit} from '@angular/core';
import {WidgetsService} from './widgets.service';
import {Widget} from './widget.model';
import 'rxjs/add/operator/map';
import {NotificationsService} from '../notifications/notifications.service';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
  providers: [WidgetsService]
})
export class WidgetsComponent implements OnInit {
  selectedWidget: Widget;
  widgets: Widget[];

  constructor(private widgetsService: WidgetsService, private notifications: NotificationsService) {
  }

  ngOnInit(): void {
    this.loadWidgets();
    this.reset();
  }

  reset() {
    this.selectedWidget = {id: null, name: '', description: ''};
  }

  save(widget) {
    if (!widget.id) {
      this.createWidget(widget);
      this.notifications.emit(`Widget: '${widget.name}' was successfully saved!`);
    } else {
      this.updateWidget(widget);
      this.notifications.emit(`Widget: '${widget.name}' was successfully updated!`);
    }
    this.reset();
  }

  private updateWidget(widget) {
    this.widgetsService.update(widget)
      .subscribe(() => {
        this.loadWidgets();
        this.reset();
      });
  }

  private createWidget(widget) {
    this.widgetsService.create(widget)
      .subscribe(() => {
        this.loadWidgets();
        this.reset();
      });
  }

  selectWidget(widget) {
    this.selectedWidget = widget;
  }

  deleteWidget(widget) {
    this.widgetsService.delete(widget)
      .subscribe(() => {
        this.loadWidgets();
        this.reset();
        this.notifications.emit(`Widget: '${widget.name}' was successfully deleted!`);
      });
  }

  cancel() {
    this.reset();
  }

  private loadWidgets() {
    this.widgetsService.all().subscribe(widgets => this.widgets = widgets);
  }
}
