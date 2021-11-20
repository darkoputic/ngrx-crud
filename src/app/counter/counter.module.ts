import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from "./counter.component";

import {
  CounterButtonsComponent,
  CounterOutputComponent,
  CustomCounterInputComponent
} from "./components";

import { MaterialModule } from "../shared/modules";
import { FormsModule } from "@angular/forms";

export const COMPONENTS = [
  CounterComponent,
  CounterOutputComponent,
  CounterButtonsComponent,
  CustomCounterInputComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  exports: COMPONENTS
})
export class CounterModule {
}
