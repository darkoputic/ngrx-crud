import { Component, Input } from '@angular/core';
import { Movie } from "../models/movie.model";

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
        <button mat-button>Watch later</button>
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
}
