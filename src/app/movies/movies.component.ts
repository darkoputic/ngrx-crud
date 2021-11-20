import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  template: `    
    <app-movies-list></app-movies-list>
  `
})
export class MoviesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
