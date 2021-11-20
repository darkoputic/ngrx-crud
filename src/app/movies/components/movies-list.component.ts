import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/app.state";
import { Movie } from "../models/movie.model";
import { getMovies } from "../state/movie.selector";

@Component({
  selector: 'app-movies-list',
  template: `
    <div class="container">
      <app-movie-item *ngFor="let movie of movies$ | async"
                      [movie]="movie"></app-movie-item>
    </div>
  `,
})
export class MoviesListComponent implements OnInit {

  movies$: Observable<Movie[]> | undefined;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.movies$ = this.store.select(getMovies);
  }

}
