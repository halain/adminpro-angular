import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Rutas hijas importadas de pages.routes
import { FeatureRoutingModule } from './pages.routes';

// modulo que contiene los componentes compartidos, header, sidebar, etc
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

// compromente principal, layout del backend
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    Graficas1Component,
    AccountSettingsComponent
  ],
  exports: [ // para que estas paginas puedan ser utilizadas por componentes de otros modulos hay que esportarlas
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ChartsModule,
    FeatureRoutingModule
  ]
})
export class PagesModule { }
