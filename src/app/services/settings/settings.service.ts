import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  // @Inject(DOCUMENT) private _document
    // es idem a
    // document.body.className.
  constructor( @Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
   }

  // almacenar configuracion en el local storage
  guardarAjustes() {
    // console.log('guardado ajustes en local storage');
    // JSON.stringify convierte el objeto en formato json de tipo string que es como se pued elamacenar el el local storage
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes ));
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
      // JSON.parse toma el json en string del local storage y lo combierte en objeto
      this.ajustes = JSON.parse( localStorage.getItem('ajustes') );
      // console.log('cargando ajustes del local storage');
      this.aplicarTema (this.ajustes.tema);
    } else {
      // console.log('cargando ajustes por defecto');
      this.aplicarTema (this.ajustes.tema);
      }
  }

  aplicarTema(tema: string) {

    let url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('theme').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }

}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
