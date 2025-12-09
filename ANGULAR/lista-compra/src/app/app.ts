import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mercadorias } from './mercadorias/mercadorias';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Mercadorias],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('lista-compra');
}
