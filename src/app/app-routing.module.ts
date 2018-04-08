import {RouterModule, Routes} from '@angular/router';
import {WidgetsComponent} from './widgets/widgets.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {'path': 'widgets', component: WidgetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
