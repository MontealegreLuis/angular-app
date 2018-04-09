import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ]
})
export class AppMaterialModule {

}
