import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MoviesComponent } from "./movies.component";

export const routes: Routes = [
  {path: '', component: MoviesComponent, data: {title: 'Movies'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {
}
