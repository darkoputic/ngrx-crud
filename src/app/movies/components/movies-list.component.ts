import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/app.state";
import { Movie } from "../models/movie.model";
import { getMovies } from "../state/movie.selector";
import { loadMovies } from "../state/movie.actions";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AuthService } from "../../shared/auth.service";

@Component({
  selector: 'app-movies-list',
  template: `
    <div class="container" [routerLink]="['/movies/add']">
      <button mat-stroked-button color="primary">Add movie</button>

      <div class="d-flex" style="margin-top: 50px">
        <app-movie-item *ngFor="let movie of movies$ | async"
                        [movie]="movie"></app-movie-item>
      </div>
    </div>
  `,
})
export class MoviesListComponent implements OnInit {

  movies$: Observable<Movie[]> | undefined;

  constructor(private fireAuth: AngularFireAuth,
              private store: Store<AppState>,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.signInAnonymously();
  }

  signInAnonymously(): void {
    this.authService.anonymousLogin()
      .then(() => {
        console.log('successfully logged in');

        this.movies$ = this.store.select(getMovies);
        this.store.dispatch(loadMovies());
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
