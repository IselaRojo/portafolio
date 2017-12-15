import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: []
})
export class InicioComponent {

  constructor( private _ps:ProductosService) {
  }

}
