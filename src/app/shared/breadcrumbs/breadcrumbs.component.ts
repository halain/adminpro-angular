import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  supscription: Subscription;
  titulo: string;

  constructor( private router: Router,
                private title: Title,
                private meta: Meta
              ) {

    this.supscription = this.getDataRoute()
      .subscribe( data => {
        // console.log(data);
        this.titulo = data.titulo; // titulo del breadcrumb
        this.title.setTitle(this.titulo); // setea el titulo de la pagina
        // definir los metatags
        const metatag: MetaDefinition = {
          name: 'description',
          content: this.titulo
        };
        // setear el metatag de la pagina
        this.meta.updateTag( metatag );
    });

  }

  ngOnInit() {
  }

  getDataRoute(): Observable<any> {
    return this.router.events.pipe(
      filter( (evento) => { // filtrar para tomar solo los eventos ActivationEnd
        if ( evento instanceof ActivationEnd) {
          return true;
        }
      }),
      filter ( // de lo filtrado anteriormente solo me interesa el del firstChild === null que tiene la data que necesito
        (evento: ActivationEnd) => evento.snapshot.firstChild === null
        ),
        map( (evento: ActivationEnd) => {
          return evento.snapshot.data;
        } )
    );
  }

}
