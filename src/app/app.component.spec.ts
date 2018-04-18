import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {StatusComponent} from './status/status.component';
import {ItemsSearchComponent} from './items/items-search/items-search.component';
import {LoginComponent} from './login/login.component';
import {RouterOutlet} from '@angular/router';
import {RouterOutletStub} from './testing/router.stubs';
import {RouterTestingModule} from '@angular/router/testing';
import {AppMaterialModule} from './app-material-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NotificationsService} from './notifications/notifications.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {ItemsService} from './items/items-search/items.service';

class NotificationsServiceStub {
  notifications$ = Observable.of({});
}

class ItemsServiceStub {
  constructor() {
  }
  search(term: String) {
  }
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppMaterialModule, FormsModule, ReactiveFormsModule, RouterTestingModule],
      declarations: [
        AppComponent, HelloWorldComponent, StatusComponent, ItemsSearchComponent, LoginComponent
      ],
      providers: [
        {provide: RouterOutlet, useClass: RouterOutletStub},
        {provide: NotificationsService, useClass: NotificationsServiceStub},
        {provide: ItemsService, useClass: ItemsServiceStub}
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Angular application'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular application');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
