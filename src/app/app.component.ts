import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar color="primary">
    <button mat-button routerLink="/"><h3>Let's chat</h3></button>
    &nbsp;
    <button mat-button routerLink="/users">Users</button>
    <span style="flex: 1 1 auto"></span>
    <button mat-button *ngIf="!authService.isAuthenticated" routerLink="/register">Register</button>
    <button mat-button *ngIf="!authService.isAuthenticated" routerLink="/login">Login</button>
    <button mat-button *ngIf="authService.isAuthenticated" (click)="authService.logout()">Logout</button>
  </mat-toolbar>
  <br />
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'My app';
  constructor(private authService: AuthService) {}
}
