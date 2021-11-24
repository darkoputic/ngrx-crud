import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

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
