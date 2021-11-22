import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { CounterState } from "../state/counter.state";
import { changeChannelName, customIncrement } from "../state/counter.actions";
import { getChannelName } from "../state/counter.selector";
import { Observable } from "rxjs";
import { AppState } from "../../store/app.state";

@Component({
  selector: 'app-custom-counter-input',
  template: `
    <div>
      <div>{{channelName$ | async}}</div>
      <input type="number" placeholder="Enter text" [(ngModel)]="value">
      <button (click)="onAdd()" mat-button>Add to counter</button>
    </div>

    <div>
      <button (click)="onChangeChannelName()" mat-button>change channel name</button>
    </div>
  `
})
export class CustomCounterInputComponent implements OnInit {
  value: number;
  channelName$: Observable<string>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.channelName$ = this.store.select(getChannelName)
  }

  onAdd(): void {
    this.store.dispatch(customIncrement({counter: this.value}));
  }

  onChangeChannelName(): void {
    this.store.dispatch(changeChannelName());
  }
}
