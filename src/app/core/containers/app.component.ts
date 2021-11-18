import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-layout>
      <app-navbar></app-navbar>

      <router-outlet></router-outlet>
    </app-layout>
  `
})
export class AppComponent {
}
