import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso1: number = 20;
  progreso2: number = 43;

  constructor() { }

  ngOnInit() {

  }

  // un metodo de como se podria actualizar el
  actualizar(event: number) {
    this.progreso1 = event;
    console.log(event);
  }



}
