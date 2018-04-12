import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Widget} from '../widget.model';

@Component({
  selector: 'app-widgets-details',
  templateUrl: './widgets-details.component.html',
  styleUrls: ['./widgets-details.component.css']
})
export class WidgetsDetailsComponent {
  originalName: string;
  selectedWidget: Widget;
  @Input() set widget(widget: Widget) {
    if (widget !== null) { this.originalName = widget.name; }
    this.selectedWidget = Object.assign({}, widget);
  }

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
