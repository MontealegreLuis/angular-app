import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Widget} from '../widget.model';

@Component({
  selector: 'app-widgets-list',
  templateUrl: './widgets-list.component.html'
})
export class WidgetsListComponent {
  @Input() widgets: Array<Widget>;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
