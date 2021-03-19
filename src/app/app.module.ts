//Aplications Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Modulos de terceros
import { ReactiveFormsModule } from '@angular/forms';

//Modulos internos de la aplicacion
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpertoComponent } from './components/experto/experto.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpertoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
