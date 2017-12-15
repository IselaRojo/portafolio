import { Component } from '@angular/core';
import { InformacionService } from "../../services/informacion.service";

@Component({
  selector: 'app-a-cerca-de',
  templateUrl: './a-cerca-de.component.html',
  styles: []
})
export class ACercaDeComponent{

  constructor(public _is:InformacionService) { }

}
