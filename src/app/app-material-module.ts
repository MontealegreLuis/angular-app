import {NgModule} from '@angular/core';
import {MatCardModule, MatIconModule, MatListModule} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatListModule
  ]
})
export class AppMaterialModule {

}
