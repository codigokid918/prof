import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  produtos = ["Celular", "Notebook", "Fone de ouvido", "Tablet"]

  show(produtos: string[]) {
    console.log(produtos)
  }
}
