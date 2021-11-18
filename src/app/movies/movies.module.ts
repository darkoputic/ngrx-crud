import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MaterialModule } from "../shared/modules";
import { MoviesRoutingModule } from "./movies-routing.module";

import { MovieFormComponent, MovieItemComponent, MoviesListComponent } from "./components";
import { StoreModule } from "@ngrx/store";
import { MovieEffects, MovieReducer } from "./state";
import { EffectsModule } from "@ngrx/effects";

export const COMPONENTS = [
  MoviesComponent,
  MovieFormComponent,
  MoviesListComponent,
  MovieItemComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    MaterialModule,
    MoviesRoutingModule,
    StoreModule.forFeature('movies', MovieReducer.reducer),
    EffectsModule.forFeature([MovieEffects])
  ]
})
export class MoviesModule {
}
