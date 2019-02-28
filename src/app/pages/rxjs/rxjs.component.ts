import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { map, retry, catchError, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

  // propiedad para hacer referencia al observador que se esta ejecurando
  subscription: Subscription;

  constructor() {

    // el observador tiene 3 callback
    this.subscription = this.regresaObservable()
      .subscribe(
        numero => {
          console.log('Callback de subscripcion al observable', numero);
        },
        error => {
          console.error('Este es el callback del error en el observable ', error);
        },
        () => {
          console.warn('Callback de que el observador termino');
        }
      );

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('saliendo de la pagina y terminando el observable');
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {

    return new Observable( (observer: Subscriber<any> ) => {

      let contador = 0;

      let intervalo = setInterval( () => {

        contador += 1;

        const salida = {
          valor: contador
        };

        observer.next(salida);

        if (contador === 30) {
          clearInterval(intervalo);
          observer.complete(); // terminar el observable
        }

        // para dispara el error del observador
        // if (contador === 2) {
          /* si se descomenta clearInterval(intervalo); nunca llega el observable terminar complete()
          y al terminar los 3 intentos retry(3) se dispararia el error*/
          // clearInterval(intervalo); // para reinicalizar la variable del contador cada vez que se dispara el error
          // observer.error('No podia ser 2!');
        // }

      }, 1000);

    }).pipe(
        // retry(3), // reintentar 3 veces antes de falla
        map( resp => { // procesa la informacion antes de servirla al subscribe. Antes del map  {valor: 1}
          // console.log('Data antes del map=>', resp);
          // console.log('Pasando por el metodo map=>', resp.valor);
        return resp.valor; // despues de pasar el map 1
        }),
        filter( (valor, index) => { // regresa obligatoriamente true o false. valor es la (salida) del observador  observer.next(salida)
          // console.log(`Metodo Filter=> Valor:, ${valor}, Index:  , ${index}`);
          if ( (valor % 2 ) === 1) { // filtrar y devolver solo los numero impares
            // impar
            return true;
          } else {
            // par
            return false;
          }
        })
    );

  }

}
