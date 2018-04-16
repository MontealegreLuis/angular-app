import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';

@Injectable()
export class NotificationsService {
  private subject = new Subject();
  notification$ = this.subject.asObservable();

  emit(notification) {
    this.subject.next(notification);
  }
}
