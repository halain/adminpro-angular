import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Rutas hijas importadas de pages.routes
import { FeatureRoutingModule } from './pages.routes';

// modulo que contiene los componentes compartidos, header, sidebar, etc
import { SharedModule } from '../shared/shared.module';

// compromente principal, layout del backend
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  exports: [ // para que estas paginas puedan ser utilizadas por componentes de otros modulos hay que esportarlas
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    FeatureRoutingModule
  ]
})
export class PagesModule { }
