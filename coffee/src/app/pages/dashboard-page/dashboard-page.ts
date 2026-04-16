import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login';
import { User } from '../../models/user';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-page.html',
  styleUrls: ['./dashboard-page.css']
})
export class DashboardPageComponent implements OnInit {
  usuario: User | null = null;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuario = this.loginService.getCurrentUser();
    if (!this.usuario) {
      this.router.navigate(['/auth/login']);
    }
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/auth/login']);
  }
}