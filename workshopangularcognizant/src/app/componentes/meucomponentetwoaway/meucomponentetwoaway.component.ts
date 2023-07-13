import { Component } from '@angular/core';

@Component({
  selector: 'app-meucomponentetwoaway',
  templateUrl: './meucomponentetwoaway.component.html',
  styleUrls: ['./meucomponentetwoaway.component.scss']
})
export class MeucomponentetwoawayComponent {
  nome: string = '';

  atualizarNome(novoNome: string): void {
    this.nome = novoNome;
  }

}
