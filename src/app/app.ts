import { Component } from '@angular/core';
import { Game } from './screens/game/game';
import { Mundial } from './screens/mundial/mundial';


@Component({
  selector: 'app-root',
  imports: [
    Game, Mundial
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  option: number=0;

  changeOption(value:number):void{
    this.option=value
    console.log(this.option)
  }
}
