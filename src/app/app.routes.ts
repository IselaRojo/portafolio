
import { RouterModule, Routes } from '@angular/router';

import {
  InicioComponent,
  ACercaDeComponent,
  DocumentosComponent,
  BuscarComponent
} from "./components/index.paginas";

const app_routes: Routes = [
{ path: 'inicio', component: InicioComponent },
{ path: 'a-cerca-de', component: ACercaDeComponent },
{ path: 'documentos/:id', component: DocumentosComponent},
{ path: 'buscar/:termino', component: BuscarComponent},
{ path: '**', pathMatch: 'full', redirectTo: 'inicio'}

];
export const app_routing = RouterModule.forRoot(app_routes,{ useHash:true});
