import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from "@angular/http";

//rutas
import { app_routing } from "./app.routes";

//servicios
import {  InformacionService } from "./services/informacion.service";

//componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ACercaDeComponent } from './components/a-cerca-de/a-cerca-de.component';
import { DocumentosComponent } from './components/documentos/documentos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ACercaDeComponent,
    DocumentosComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing
  ],
  providers: [
    InformacionService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
