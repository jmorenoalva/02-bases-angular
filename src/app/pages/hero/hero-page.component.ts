import { Component, signal } from "@angular/core";



@Component({
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  constructor() {}

  getHeroDescription() {
    return `${this.name} - ${this.age}`;
  }
  changeHero() {
    this.name.update((v) => 'Spiderman');
    this.age.update((v) => 22);
  }
  resetForm() {
    this.name.update((v) => 'Ironman');
    this.age.update((v) => 45);
  }

  changeAge(){
    this.age.update((v)=>60);
  }
}
