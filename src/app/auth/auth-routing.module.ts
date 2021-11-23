import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./auth/components";

const routes: Routes = [
  {
    path: '', children: [
      {path: '', redirectTo: 'login'},
      {path: 'login', component: LoginComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
