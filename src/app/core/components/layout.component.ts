import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <mat-sidenav-container fullscreen>
      <ng-content></ng-content>
    </mat-sidenav-container>
  `,
  styles: [
      `
      mat-sidenav-container > * {
        padding: 50px;
      }
    `,
  ],
})
export class LayoutComponent {
}
