import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MaterialModule } from "../shared/modules";
import { MoviesRoutingModule } from "./movies-routing.module";

import {
  MovieFormComponent,
  MovieItemComponent,
  MoviesListComponent
} from "./components";
import { CounterModule } from "../counter/counter.module";

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
    CounterModule,
  ]
})
export class MoviesModule {
}
