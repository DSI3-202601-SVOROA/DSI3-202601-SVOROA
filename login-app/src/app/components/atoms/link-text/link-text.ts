import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-link-text',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './link-text.html',
  styleUrls: ['./link-text.css']
})
export class LinkTextComponent {
  @Input() prefixText: string = '';
  @Input() linkText: string = '';
  @Input() routerLinkPath: string = '/';
}