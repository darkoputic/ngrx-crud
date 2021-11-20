import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="container">
      <p>works</p>
      <app-counter-output></app-counter-output>
      <app-counter-buttons></app-counter-buttons>
      <app-custom-counter-input></app-custom-counter-input>
    </div>
  `
})
export class CounterComponent {
  constructor() {
  }
}
