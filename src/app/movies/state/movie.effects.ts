import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MovieService } from "../services/movie.service";
import { loadMovies, loadMoviesSuccess } from "./movie.actions";
import { map, mergeMap } from "rxjs/operators";

@Injectable()
export class MovieEffects {
  constructor(private actoins$: Actions,
              private movieService: MovieService) {
  }

  loadMovies$ = createEffect(() => {
    return this.actoins$.pipe(
      ofType(loadMovies),
      mergeMap((action) => {
        return this.movieService.getMovies().pipe(
          map((movies) => {
            console.log(movies);
            return loadMoviesSuccess({movies})
          })
        )
      })
    );
  }, {dispatch: false});
}
