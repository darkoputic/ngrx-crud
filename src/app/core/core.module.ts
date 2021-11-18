import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "../shared/modules/material.module";

import { AppComponent, NotFoundPageComponent } from "./containers";
import { LayoutComponent, NavbarComponent } from "./components";
import { RouterModule } from "@angular/router";

export const COMPONENTS = [
  AppComponent,
  NotFoundPageComponent,
  LayoutComponent,
  NavbarComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: COMPONENTS
})
export class CoreModule {
}
