import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayphotoComponent } from './dayphoto/dayphoto.component';
import { DayphotoModule } from './dayphoto/dayphoto.module';
import { HeaderComponent } from './header/header.component';
import { HeaderModule } from './header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { BuscaCepComponent } from './busca-cep/busca-cep.component';
import { BuscaCepModule } from './busca-cep/busca-cep.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    DayphotoModule,
    HttpClientModule,
    BuscaCepModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
