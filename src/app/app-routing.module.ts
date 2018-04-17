import {RouterModule, Routes} from '@angular/router';
import {WidgetsComponent} from './widgets/widgets.component';
import {NgModule} from '@angular/core';
import {WidgetComponent} from './widgets/widget/widget.component';

const routes: Routes = [
  {'path': 'widgets', component: WidgetsComponent},
  {'path': 'widgets/:id', component: WidgetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
