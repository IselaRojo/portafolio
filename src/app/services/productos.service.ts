import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any[] = [];
  productos_filtrados:any[] =[];
  cargando:boolean = true;

  constructor( private http:Http ) {

    this.cargar_productos();


  }

  public buscar_producto( termino:string){

    // console.log("Buscando Producto");
    // console.log( this.productos.length );

    if( this.productos.length === 0 ){
      this.cargar_productos().then( ()=>{
        //termino la cargando
        this.filtrar_productos(termino);
      });
    }else{
      this.filtrar_productos(termino);
    }


    this.productos.forEach( prod =>{
      // console.log(prod);
    })
  }

  private filtrar_productos( termino:string ){

    this.productos_filtrados=[];

    termino = termino.toLowerCase();

    this.productos.forEach( prod =>{

      if( prod.categoria.indexOf( termino )>=0 || prod.titulo.toLowerCase().indexOf( termino )>=0 ){
        this.productos_filtrados.push( prod );
        // console.log( prod );
      }

      // console.log( prod );
    })
  }

  public cargar_producto( cod:string ){

    return this.http.get(`https://pagina-web-b3d89.firebaseio.com/producto/${ cod }.json`);

  }

  public cargar_productos(){
    this.cargando = true;

    let promesa = new Promise( (resolve, reject ) =>{
      this.http.get('https://pagina-web-b3d89.firebaseio.com/productos_idx.json')
               .subscribe( res =>{

                //console.log( res.json() );

                //setTimeout(()=>{
                this.cargando = false;
                this.productos = res.json();
                resolve();
              //}, 1500)
            });
          });

          return promesa;
        }
      }
