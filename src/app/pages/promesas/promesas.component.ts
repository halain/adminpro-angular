import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() {


    this.contar3().then(
      (msj) => console.log(msj) // resolve
    ).catch ( error => console.log('Error en la p;romesa', error));

  }

  ngOnInit() {
  }


  contar3(): Promise<boolean> {

    return new Promise( (resolve, reject) => {

      let contador = 0;
      let intervalo = setInterval(() => {

        contador += 1;
        console.log(contador);

        if (contador === 3) {
          resolve(true);
          // reject( 'Retorno ahora el reject');
          clearInterval(intervalo); // para detener la ejecucion de la promesa
        }

      }, 1000);

    });


  }

}
