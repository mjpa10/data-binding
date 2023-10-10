import { Component } from '@angular/core';


@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  cor='red';
  getCor(){
    this.cor='green'
  }

  href='https://www.google.com.br'
  corDaFonte='red'
  setCorFonte(){
    if(this.corDaFonte=="red"){
      this.corDaFonte='green'
    }else{
      this.corDaFonte='red'
    }
  }
  fontFamily=''
  setFontFamily(value:string){
    this.fontFamily=value
  }


}



