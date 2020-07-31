import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-paginas.interfaces';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  constructor( private http: HttpClient ) { 
    console.log('Servicio listo');

    //Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina ) => {
        this.cargada = true;
        this.info = resp;
        console.log(resp);
      });
  }
}