import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscaCepComponent } from './busca-cep.component';



@NgModule({
  declarations: [BuscaCepComponent],
  exports: [BuscaCepComponent],
  imports: [
    CommonModule
  ]
})
export class BuscaCepModule { }
