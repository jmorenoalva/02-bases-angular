import { Component, signal } from "@angular/core";



@Component({
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  constructor() {}

  getHeroDescription() {
    return `${this.name()} - ${this.age()}`;
  }
  changeHero() {
    // this.name.update((v) => 'Spiderman');
    // this.age.update((v) => 22);

    this.name.set('Spiderman');
    this.age.set(22);
  }
  resetForm() {
    // this.name.update((v) => 'Ironman');
    // this.age.update((v) => 45);

    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge(){
    // this.age.update((v)=>60);
    this.age.set(60);
  }
}
