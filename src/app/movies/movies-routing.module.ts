import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MoviesComponent } from "./movies.component";
import { MovieAddComponent, MoviesListComponent } from "./components";

export const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
    data: {title: 'Movies'},
    children: [
      {path: 'list', component: MoviesListComponent},
      {path: 'add', component: MovieAddComponent},
      {path: 'edit/:id', component: MovieAddComponent},
      {path: '', redirectTo: 'list', pathMatch: 'full'},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {
}
