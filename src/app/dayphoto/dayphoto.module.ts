import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayphotoComponent } from './dayphoto.component';



@NgModule({
  declarations: [DayphotoComponent],
  exports: [DayphotoComponent],
  imports: [
    CommonModule
  ]
})
export class DayphotoModule { }
