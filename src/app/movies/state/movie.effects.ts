import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MovieActions } from "./index";
import { catchError, map, switchMap } from "rxjs/operators";

import { MovieService } from "../services/movie.service";
import { Movie } from "../models/movie.model";
import { of } from "rxjs";

@Injectable()
export class MovieEffects {

  constructor(private actions$: Actions,
              private movieService: MovieService) {
  }

  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MovieActions.enter),
      switchMap(() => {
          return this.movieService.getPopularCelebs().pipe(
            map((movies: Movie[]) => MovieActions.loadMoviesSuccess({movies})),
            catchError(err => of(MovieActions.loadMoviesFailure({errorMsg: err.message})))
          )
        }
      )
    )
  })
}
