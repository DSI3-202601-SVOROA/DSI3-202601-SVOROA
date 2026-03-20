import { Component, EventEmitter, input, Input, Output } from '@angular/core';
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

  @Output () elements: EventEmitter<number>  = new EventEmitter();

  calculate():void{
    this.elements.emit(this.count);
    console.log("La opcion ingresada es")
  }
}
