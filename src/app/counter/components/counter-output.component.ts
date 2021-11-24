import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { getCounter } from "../state/counter.selector";
import { AppState } from "../../store/app.state";

@Component({
  selector: 'app-counter-output',
  template: `
    <h3>Number of selected movies: {{counter$ | async}}</h3>
  `
})
export class CounterOutputComponent implements OnInit {
  counter$: Observable<number>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter);
  }
}
