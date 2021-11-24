import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MaterialModule } from "../shared/modules";
import { MoviesRoutingModule } from "./movies-routing.module";

import {
  MovieAddComponent,
  MovieFormComponent,
  MovieItemComponent,
  MoviesListComponent
} from "./components";
import { CounterModule } from "../counter/counter.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { movieReducer } from "./state/movie.reducer";
import { MOVIE_STATE_NAME } from "./state/movie.selector";
import { EffectsModule } from "@ngrx/effects";
import { MovieEffects } from "./state/movie.effects";

export const COMPONENTS = [
  MoviesComponent,
  MovieFormComponent,
  MoviesListComponent,
  MovieItemComponent,
  MovieAddComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MoviesRoutingModule,
    CounterModule,
    MaterialModule,
    StoreModule.forFeature(MOVIE_STATE_NAME, movieReducer),
    EffectsModule.forFeature([MovieEffects])
  ]
})
export class MoviesModule {
}
