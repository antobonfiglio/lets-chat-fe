import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'users',
  template: `<div *ngFor="let user of api.users">
                <mat-card [routerLink]="['/profile', user._id]" style="cursor: pointer">{{ user.name }}</mat-card>
             </div>`
})
export class UsersComponent {
  constructor(private api: ApiService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
      console.log('init UsersComponent');
      this.api.getUsers();
  }

}
