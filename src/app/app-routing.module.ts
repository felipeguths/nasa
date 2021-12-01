import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaCepComponent } from './busca-cep/busca-cep.component';

const routes: Routes = [
  {path:'buscacep', component: BuscaCepComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
