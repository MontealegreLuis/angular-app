import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {WidgetsComponent} from './widgets/widgets.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {AppMaterialModule} from './app-material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WidgetsListComponent} from './widgets/widgets-list/widgets-list.component';
import {WidgetsDetailsComponent} from './widgets/widgets-details/widgets-details.component';
import {HttpModule} from '@angular/http';
import { ItemsSearchComponent } from './items/items-search/items-search.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    WidgetsComponent,
    WidgetsListComponent,
    WidgetsDetailsComponent,
    ItemsSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
