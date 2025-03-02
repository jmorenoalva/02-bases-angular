import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {
  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power:9001},
    {id: 2, name: 'Vegeta', power:8000},
    {id: 3, name: 'Piccolo', power:3000},
  ]);
}
