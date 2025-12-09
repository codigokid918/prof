import { Component } from '@angular/core';

@Component({
  selector: 'app-mercadorias',
  imports: [],
  templateUrl: './mercadorias.html',
  styleUrl: './mercadorias.css',
})
export class Mercadorias {
  mercadorias = [
    {
      descricao: 'Arroz',
      quantidade: 1
    },
    {
      descricao:"Feijão",
      quantidade:5
    },
    {
      descricao:"Óleo",
      quantidade: 2
    }
]
}
