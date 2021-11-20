import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <div class="container">
      <mat-sidenav-container fullscreen>
        <ng-content></ng-content>
      </mat-sidenav-container>
    </div>
  `,
})
export class LayoutComponent {
}
