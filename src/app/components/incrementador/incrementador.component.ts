import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef; // para hacer referencia al elemto html dentro del componente

  @Input('nombre') leyenda: string = 'Leyenda'; // @Input('nombre') renombra la propiedad, asi se llama desde el exterior
  @Input() progreso: number = 50;

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

  }

  // metodo que es llamado al cambiar un valor en el input
  onChanges(newValue: number) {

    // let elemHTML: any = document.getElementsByName('progreso')[0];

    // console.log(this.txtProgress);


    if ( newValue >= 100 ) {
      this.progreso = 100;
    } else if ( newValue <= 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    // elemHTML.value = this.progreso;

    // seteo el valor del input
    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);

  }

  cambiarValor( valor: number) {

    if ( this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }

    // actualiza el valor del input al dar en el boton correspondiente
    this.progreso += valor;

    // this.cambioValor.emit(this.progreso);

    // pongo el foco en el input
    this.txtProgress.nativeElement.focus();

  }

}
