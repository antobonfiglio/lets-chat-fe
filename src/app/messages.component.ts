import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'messages',
  template: `<div *ngFor="let message of api.messages">
                <mat-card>{{ message.message }}</mat-card>
             </div>`
})
export class MessagesComponent {
  constructor(private api: ApiService, private route: ActivatedRoute) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
      const userId = this.route.snapshot.params.id;
      this.api.getMessages(userId);
  }

}
