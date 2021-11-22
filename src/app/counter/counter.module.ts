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
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./state/counter.reducer";
import { COUNTER_STATE_NAME } from "./state/counter.selector";

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
    StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer)
  ],
  exports: COMPONENTS
})
export class CounterModule {
}
