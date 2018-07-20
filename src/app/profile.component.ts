import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'profile',
  template: `
        <mat-card>
            <mat-card-header>
                <mat-card-title>
                    <h4>Profile</h4>
                </mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <mat-list>
                    <mat-list-item>Name:</mat-list-item>
                    <mat-list-item>Email: {{ profile?.email }}</mat-list-item>
                    <mat-list-item>Name: {{ profile?.name }}</mat-list-item>
                    <mat-list-item>Description: {{ profile?.description }}</mat-list-item>
                </mat-list>
            </mat-card-content>
        </mat-card>
        <mat-card>
            <mat-card-header>
                <mat-card-title>
                    <h4>Posts</h4>
                </mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <messages></messages>
            </mat-card-content>
        </mat-card>
  `
})
export class ProfileComponent {

    profile = {};

    constructor(private api: ApiService, private route: ActivatedRoute) {}

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        const id = this.route.snapshot.params.id;
        this.api.getProfile(id).subscribe( data => this.profile = data );
    }
}
