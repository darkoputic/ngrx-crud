import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { decrement, increment, reset } from "../state/counter.actions";
import { AppState } from "../../store/app.state";

@Component({
  selector: 'app-counter-buttons',
  template: `
    <div class="buttons-container">
      <button (click)="onIncrement()" mat-button>Add</button>
      <button (click)="onDecrement()" mat-button>Remove</button>
      <button (click)="onReset()" mat-button>Reset</button>
    </div>
  `,
  styles: [`
    .buttons-container {
      display: flex;
    }

    .buttons-container > button {
      margin-left: 15px;
    }
  `]
})
export class CounterButtonsComponent {

  constructor(private store: Store<AppState>) {
  }

  onIncrement(): void {
    this.store.dispatch(increment())
  }

  onDecrement(): void {
    this.store.dispatch(decrement());
  }

  onReset(): void {
    this.store.dispatch(reset());
  }
}
