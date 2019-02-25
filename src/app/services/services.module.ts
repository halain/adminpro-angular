import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsService, SidebarService, SharedService } from './services.index';


@NgModule({
  declarations: [],
 // estos providers se importarian en el app.module Pero no es necesario porque los servicios se importan
 // automaticamente en el app.module mediante la directica @Injectable  providedIn: 'root' del servicio

  providers: [
    SettingsService,
    SidebarService,
    SharedService
  ],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { }
