import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  feriado=true;
  falta=true;
  title = 'data-binding';
  dado: string = 'olá mundo'
  link = 'https://www.google.com.br'
  getUm(){
    return 1;
  }
}
