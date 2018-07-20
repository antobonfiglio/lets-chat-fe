import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login',
  template: `
        <mat-card>
            <mat-card-header>
                <mat-card-title>
                    <h4>Login</h4>
                </mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <form class="example-form">
                    <mat-form-field class="example-full-width">
                        <input [(ngModel)]="loginData.email" name="email" matInput placeholder="Email" type="email">
                    </mat-form-field>
                    &nbsp;
                    <mat-form-field class="example-full-width">
                        <input [(ngModel)]="loginData.password" name="password" matInput placeholder="Password" type="password">
                    </mat-form-field>
                    &nbsp;
                    <button (click)="post()" mat-raised-button color="primary">Login</button>
                </form>
            </mat-card-content>
        </mat-card>
  `
})
export class LoginComponent {
    loginData = {};

    constructor(private api: AuthService) {}

    post() {
        this.api.loginUser(this.loginData);
    }
}
