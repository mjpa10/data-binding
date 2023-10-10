import { Component } from '@angular/core';

@Component({
  selector: 'app-two-wai-binding',
  templateUrl: './two-wai-binding.component.html',
  styleUrls: ['./two-wai-binding.component.css']
})
export class TwoWaiBindingComponent {
  textoSelecionado: string = ''; 
  cor: string = 'black'; 

  getCor() {
    this.cor = this.getRandomColor();
  }

  mudaTexto(event: any) {
    this.textoSelecionado = event.target.value;
  }

  private getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
