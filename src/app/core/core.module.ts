import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent, NotFoundPageComponent } from "./containers";
import { LayoutComponent, NavbarComponent } from "./components";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../shared/modules";
import { CounterModule } from "../counter/counter.module";

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
    CounterModule,
  ],
  exports: COMPONENTS
})
export class CoreModule {
}
