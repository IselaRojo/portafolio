import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class InformacionService {

  info:any = {};
  cargada:boolean = false;
  cargada_sobre_nosotros:boolean = false;
  equipo:any[]= [];

  constructor(public http:Http) {

    this.carga_info();
    this.cargar_sobre_nosotros();
  }

    public carga_info(){
    this.http.get("assets/data/info.paginas.json")
              .subscribe( data =>{
                //console.log(data.json());
                this.cargada =true;
                this.info = data.json();
              })
  }
  public cargar_sobre_nosotros(){
    this.http.get("https://pagina-web-b3d89.firebaseio.com/equipo.json")
              .subscribe( data =>{
                //console.log(data.json());
                this.cargada_sobre_nosotros =true;
                this.equipo = data.json();
  })

}
}
