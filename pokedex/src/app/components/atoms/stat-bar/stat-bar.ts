import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat-bar.html',
  styleUrl: './stat-bar.css'
})
export class StatBarComponent {
  @Input() statName: string = '';
  @Input() value: number = 0;
  @Input() maxValue: number = 255;

  getPercentage(): number {
    return (this.value / this.maxValue) * 100;
  }

  getBarClass(): string {
    if (this.value < 50) return 'stat-bar__fill--low';
    if (this.value < 100) return 'stat-bar__fill--medium';
    return 'stat-bar__fill--high';
  }
}