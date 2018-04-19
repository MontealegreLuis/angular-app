import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsComponent } from './widgets.component';
import {WidgetsListComponent} from './widgets-list/widgets-list.component';
import {ItemsService} from '../items/items-search/items.service';
import {HttpModule} from '@angular/http';
import {WidgetsDetailsComponent} from './widgets-details/widgets-details.component';
import {AppMaterialModule} from '../app-material-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NotificationsService} from '../notifications/notifications.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

class NotificationsServiceStub {
  notifications$ = Observable.of({});
}

class ItemsServiceStub {
}

describe('WidgetsComponent', () => {
  let component: WidgetsComponent;
  let fixture: ComponentFixture<WidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsComponent, WidgetsListComponent, WidgetsDetailsComponent ],
      imports: [HttpModule, AppMaterialModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule],
      providers: [
        {provide: NotificationsService, useClass: NotificationsServiceStub},
        {provide: ItemsService, useClass: ItemsServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
