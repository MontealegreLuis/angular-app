import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsSearchComponent } from './items-search.component';
import {AppMaterialModule} from '../../app-material-module';
import {ItemsService} from './items.service';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

class ItemsServiceStub {
}

describe('ItemsSearchComponent', () => {
  let component: ItemsSearchComponent;
  let fixture: ComponentFixture<ItemsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsSearchComponent ],
      imports: [AppMaterialModule, HttpModule, BrowserAnimationsModule],
      providers: [{provide: ItemsService, useClass: ItemsServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
