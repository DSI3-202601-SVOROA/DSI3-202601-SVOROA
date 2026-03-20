
import { Component, input, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [
    FormsModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  count: number = 1;
  @Input() title!:string;
  @Input() description!:string;
  @Input() actionName!:string;
  @Input() label!:string;

  calculate():void{
    console.log("La opcion ingresada es")
  }
}
