import { Component } from "@angular/core";



@Component({
  templateUrl: './counter-page.component.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `,
})
export class CounterPageComponent {
  counter = 0;

  increaseBy(value: number) {
    this.counter += value;
  }

  decreaseBy(value:number){
    if (this.counter > 0) {
      this.counter -= value;
    }
  }

  resetCounter(){
    this.counter=0;
  }
}
