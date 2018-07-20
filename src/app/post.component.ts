import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'post',
  template: `<mat-card>
  <mat-card-header>
      <mat-card-title>
          <h4>New Post</h4>
      </mat-card-title>
  </mat-card-header>
  <mat-card-content>
      <form class="example-form">
          <mat-form-field class="example-full-width" style="width: 100%">
              <textarea [(ngModel)]="postMessage" name="message" matInput placeholder="Post message"></textarea>
          </mat-form-field>
          <br />
          <button (click)="post()" mat-raised-button color="primary">Post</button>
      </form>
  </mat-card-content>
</mat-card>`
})
export class PostComponent {

    postMessage = '';

    constructor(private api: ApiService) {}

    post() {
        this.api.postMessage({message: this.postMessage});
    }
}
