import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas, ruta padre root
import { AppRoutingModule } from './app-routing.module';

// Modulos
import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';

// COmponentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
