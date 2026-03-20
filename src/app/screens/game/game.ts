import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game',
  imports: [Header,
    FormsModule

  ],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game {

 elements: number = 0;
 options: number[] = [];
  jugadores: string[] = ["ALICE", "BOB", "EMPATE"];
  ganador: string = "";

generateElements(event: number){
  console.log("El padre escucho : " , event);
  this.elements = event;
  this.options = Array(event).fill('');

}
calculateWinner() {
    let alicePoints = 0;
    let bobPoints = 0;

    for(let juegos of this.options){

      const ganador = String(juegos);
      console.log( ganador);

      if(ganador === 'ALICE') {
        alicePoints+=2;
      } else if(ganador === 'BOB') {
        bobPoints+=2;
      } else {
        alicePoints++;
        bobPoints++;
      }
    }

      if(alicePoints > bobPoints) {
        console.log("La ganadora es ALICE");
        this.ganador = "ALICE";
      } else if(bobPoints > alicePoints) {
        console.log("El ganador es BOB");
        this.ganador = "BOB";
      } else {
        console.log("EMPATE");
        this.ganador = "EMPATE";
      }
  }
}
