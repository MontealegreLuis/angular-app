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


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    WidgetsComponent,
    WidgetsListComponent,
    WidgetsDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
