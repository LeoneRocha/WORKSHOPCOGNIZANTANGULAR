import { Component, Input } from '@angular/core';

@Component({
  selector: 'meucomponentedecorator',
  templateUrl: './meucomponentedecorator.component.html',
  styleUrls: ['./meucomponentedecorator.component.scss']
})
export class MeucomponentedecoratorComponent {
  @Input() nome: string = "";
}
