import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <mat-toolbar color="primary">
      <span>Movies</span>

      <span class="example-spacer"></span>
      <div class="buttons-container">
        <button mat-icon-button
                [routerLink]="'/movies'"
                [routerLinkActive]="['active']">Movies
        </button>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .example-spacer {
      flex: 1 1 auto;
    }

    .buttons-container {
      margin-right: 30px;
    }

    button:first-of-type {
      margin-right: 15px;
    }

    button.active {
      text-decoration: underline;
    }
  `]
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
