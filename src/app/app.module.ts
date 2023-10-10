import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExercicioComponent } from './exercicio/exercicio.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWaiBindingComponent } from './two-wai-binding/two-wai-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    ExercicioComponent,
    EventBindingComponent,
    TwoWaiBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
