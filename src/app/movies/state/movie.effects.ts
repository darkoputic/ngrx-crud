import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MovieService } from "../services/movie.service";
import {
  addMovie,
  addMovieSuccess,
  deleteMovie, deleteMovieSuccess,
  editMovie,
  editMovieSuccess,
  loadMovies,
  loadMoviesSuccess
} from "./movie.actions";
import { map, mergeMap, switchMap } from "rxjs/operators";

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
            return loadMoviesSuccess({movies})
          })
        )
      })
    );
  });

  addMovie$ = createEffect(() => {
    return this.actoins$.pipe(
      ofType(addMovie),
      mergeMap((action) => {
        return this.movieService.addMovie(action.movie).pipe(
          map((data) => {
            const movie = {...action.movie, id: data.name}

            return addMovieSuccess({movie});
          })
        )
      })
    )
  });

  editMovie$ = createEffect(() => {
    return this.actoins$.pipe(
      ofType(editMovie),
      switchMap((action) => {
        return this.movieService.editMovie(action.movie).pipe(
          map((data) => {
            const movie = action.movie;

            return editMovieSuccess({movie})
          })
        )
      })
    )
  });

  deleteMovie$ = createEffect(() => {
    return this.actoins$.pipe(
      ofType(deleteMovie),
      switchMap((action) => {
        return this.movieService.deleteMovie(action.id).pipe(
          map((data) => {
            const id = action.id;
            return deleteMovieSuccess({id})
          })
        )
      })
    )
  })
}
