import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent, NotFoundPageComponent } from './containers';
import { LayoutComponent, NavbarComponent } from './components';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
  ],
  exports: COMPONENTS
})
export class CoreModule {
}
