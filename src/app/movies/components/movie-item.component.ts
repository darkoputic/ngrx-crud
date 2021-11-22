import { Component, Input } from '@angular/core';
import { Movie } from "../models/movie.model";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/app.state";
import { deleteMovie } from "../state/movie.actions";

@Component({
  selector: 'app-movie-item',
  template: `
    <mat-card class="example-card" *ngIf="movie">
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>{{movie.title}}</mat-card-title>
        <mat-card-subtitle>Dog Breed</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
      <mat-card-content>
        <p>
          {{movie.description}}
        </p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button [routerLink]="['/movies/edit', movie.id]">Update movie</button>
        <button mat-button (click)="onDeleteMovie(movie)">Delete movie</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
      `
      .example-card {
        max-width: 400px;
        margin-right: 50px;
      }

      .example-header-image {
        background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
        background-size: cover;
      }
    `
  ]
})
export class MovieItemComponent {
  @Input() movie: Movie | undefined;

  constructor(private store: Store<AppState>) {
  }

  onDeleteMovie(movie: Movie): void {
    if (confirm('Are you sure you want to delete?')) {
      const id = movie.id;
      console.log('delete post');
      this.store.dispatch(deleteMovie({id}));
    }
  }
}
