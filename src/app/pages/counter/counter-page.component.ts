import { ChangeDetectionStrategy, Component, signal } from "@angular/core";



@Component({
  templateUrl: './counter-page.component.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10);

  constructor(){
    setInterval(()=>{
      // this.counter += 1;
      // this.counterSignal.update((v)=>v+1); //esta señal si se ejecuta y actualiza el valor, pero es necesario el OnPush
      console.log('Tick');
    }, 2000);
  }

  increaseBy(value: number) {
    if (value>0) {
      this.counter += value;
      this.counterSignal.update((current) => current + value);
    }else{
      if (this.counter > 0) {
        this.counter += value;
      }

      if (this.counterSignal() > 0) {
        this.counterSignal.update((current) => current + value);
      }
    }
  }

  decreaseBy(value:number){
    if (this.counter > 0) {
      this.counter -= value;
    }

    if (this.counterSignal() > 0) {
      this.counterSignal.update((current) => current - value);
    }

  }

  resetCounter(){
    this.counter=0;
    this.counterSignal.set(0);
  }
}
