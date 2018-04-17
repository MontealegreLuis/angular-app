import {WidgetsService} from '../widgets.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {Widget} from '../widget.model';

@Component({
  'selector': 'app-widget',
  'templateUrl': './widget.component.html',
  'providers': [WidgetsService],
})
export class WidgetComponent implements OnInit {
  widget: Widget = {id: 0, name: '', description: ''};

  constructor(private widgets: WidgetsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .map((params: ParamMap) => +params.get('id'))
      .switchMap((id: number) => this.widgets.load(id))
      .subscribe((widget: Widget) => this.widget = widget)
    ;
  }

  saveWidget(widget: Widget) {
  }

  cancel() {
  }
}
