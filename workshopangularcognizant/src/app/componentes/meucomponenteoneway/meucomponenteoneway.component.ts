import { Component, Input } from '@angular/core';

@Component({
  selector: 'meucomponenteoneway',
  templateUrl: './meucomponenteoneway.component.html',
  styleUrls: ['./meucomponenteoneway.component.scss']
})
export class MeucomponenteonewayComponent {  
        nome: string = "Fulano";
        campoativo: boolean = true;

}
