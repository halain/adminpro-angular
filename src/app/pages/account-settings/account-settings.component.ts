import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/services.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

// se inyecta el dom para tener acceso a los elementos html del mismo
  constructor( public _ajustes: SettingsService) {
                 }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor( tema: string, link: any) {

    this.aplicarCheck(link);

    this._ajustes.aplicarTema (tema);
  }

  aplicarCheck(link: any) {
    // accediendo al dom directamente con javascript, no como el caso anterior con el _document
    let selectores: any = document.getElementsByClassName('selector');

    for ( let ref of selectores ) {
      // remover el nombre de la clase en todos los elementos
      ref.classList.remove('working');
    }

    // agregar la clase solo al elemento seleccionado
    link.classList.add('working');
  }

  colocarCheck() {
    let selectores: any = document.getElementsByClassName('selector');
    let tema = this._ajustes.ajustes.tema;

    for ( let ref of selectores ) {
      if ( ref.getAttribute('data-theme') === tema ) {
        ref.classList.add('working');
        break;
      }
    }

  }

}
