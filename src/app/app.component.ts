import { Component } from '@angular/core';
import {ItemsService} from './items/items-search/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ItemsService]
})
export class AppComponent {
  title = 'Angular application';
  items;

  constructor(private itemsService: ItemsService) {
  }

  handleResults(items) {
    this.items = items;
  }
}
