import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //String nome = "Jose";
  nome: string;
  idade: number = 23;

  alterarNome(nomeEvent): void{
    console.log(nomeEvent.target.value);
    this.nome = nomeEvent.target.value;
  }

  lancarDado(): number{
    return Math.floor(Math.random() * 6) + 1;
  }

  adicionar (nomeInput: any): void{
    console.log(nomeInput.value);
    this.nome = nomeInput.value;
  }

}
