import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">
      <span>BanCapsula</span>
      <span class="spacer"></span>
      <a mat-button routerLink="/">Inicio</a>
      <a mat-button>Servicios</a>
      <a mat-button>Contacto</a>
      <a
        mat-button
        routerLink="/login"
        *ngIf="!(authService.isAuthenticated$ | async)"
        >Login</a
      >
      <button
        mat-button
        (click)="logout()"
        *ngIf="authService.isAuthenticated$ | async"
      >
        Logout
      </button>
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(public authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
