import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
    registerData = {};

    constructor(private api: AuthService) {}

    post() {
        console.log(this.registerData);
        this.api.registerUser(this.registerData);
    }
}
