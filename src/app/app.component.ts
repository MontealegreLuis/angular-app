import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {NotificationsService} from './notifications/notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular application';
  aStatus = 'Active';
  items;

  constructor(
    private snackBar: MatSnackBar,
    private notifications: NotificationsService
  ) {
  }

  handleResults(items) {
    this.items = items;
  }

  ngOnInit() {
    this.notifications.notification$
      .subscribe(notification => this.showNotification(notification));
  }

  private showNotification(notification: any) {
    this.snackBar.open(notification, 'OK', {
      duration: 3000
    });
  }
}
