import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from "./core/containers";
import { CounterComponent } from "./counter/counter.component";

const routes: Routes = [
  {path: '', redirectTo: '/selected-movies', pathMatch: 'full'},
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then((m) => m.MoviesModule),
  },
  {
    path: 'selected-movies',
    component: CounterComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
