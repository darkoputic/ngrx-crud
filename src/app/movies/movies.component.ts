import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  template: `
    <router-outlet></router-outlet>
  `
})
export class MoviesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
