import { Component, OnInit } from '@angular/core';
import { Movie } from "../models/movie.model";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-movies-list',
  template: `
    <div class="movie-container">
      <app-movie-item *ngFor="let movie of movies | async"
                      [movie]="movie"></app-movie-item>
    </div>
  `,
  styles: [
      `
      .movie-container {
        padding: 50px;
      }
    `
  ]
})
export class MoviesListComponent implements OnInit {

  movies: Observable<Movie[]> | undefined;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

}
