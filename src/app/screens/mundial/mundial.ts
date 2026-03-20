import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-mundial',
  imports: [Header, FormsModule, NgClass],
  templateUrl: './mundial.html',
  styleUrl: './mundial.css',
})
export class Mundial {

  casos: { brasil: number; colombia: number; resultado: string; clase: string }[] = [];
  error: string = '';

  generarCasos(n: number): void {
    if (n < 1 || n > 100) {
      this.error = 'La cantidad de casos debe estar entre 1 y 100.';
      this.casos = [];
      return;
    }
    this.error = '';
    this.casos = Array.from({ length: n }, () => ({
      brasil: 0,
      colombia: 0,
      resultado: '',
      clase: ''
    }));
  }

  calcular(i: number): void {
    const caso = this.casos[i];
    if (caso.colombia > caso.brasil) {
      caso.resultado = '¡Ganamos!';
      caso.clase = 'ganamos';
    } else if (caso.brasil > caso.colombia) {
      caso.resultado = 'Perdimos';
      caso.clase = 'perdimos';
    } else {
      caso.resultado = 'Casi ganamos';
      caso.clase = 'empate';
    }
  }
}