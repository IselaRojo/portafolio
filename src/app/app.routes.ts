
import { RouterModule, Routes } from '@angular/router';

import {
  InicioComponent,
  ACercaDeComponent,
  DocumentosComponent
} from "./components/index.paginas";

const app_routes: Routes = [
{ path: 'inicio', component: InicioComponent },
{ path: 'a-cerca-de', component: ACercaDeComponent },
{ path: 'documentos', component: DocumentosComponent},
{ path: '**', pathMatch: 'full', redirectTo: 'inicio'}

];
export const app_routing = RouterModule.forRoot(app_routes,{ useHash:true});
