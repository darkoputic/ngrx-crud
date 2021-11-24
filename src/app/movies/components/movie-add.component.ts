import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movie } from "../models/movie.model";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/app.state";
import { addMovie, editMovie } from "../state/movie.actions";
import { ActivatedRoute, Router } from "@angular/router";
import { getMovieById } from "../state/movie.selector";

@Component({
  selector: 'app-movie-add',
  template: `

    <div class="container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>{{isEdit ? 'Edit movie' : 'Add new movie'}}</mat-card-title>
        </mat-card-header>

        <mat-card-content>
          <form [formGroup]="form" class="form">

            <mat-form-field class="form-element">
              <input matInput placeholder="Name" formControlName="title">
              <mat-error *ngIf="!form.controls['title'].valid && form.controls['title'].touched">
                {{ validationMessage }}
              </mat-error>
            </mat-form-field>

            <mat-form-field class="form-element">
            <textarea matInput placeholder="Description" matTextareaAutosize matAutosizeMinRows="2"
                      matAutosizeMaxRows="5" formControlName="description"></textarea>
              <mat-error *ngIf="!form.controls['description'].valid && form.controls['description'].touched">
                {{validationMessage}}
              </mat-error>
            </mat-form-field>

            <div class="form-element">
              <button mat-raised-button color="primary" type="button" class="button"
                      [disabled]="!form.valid" (click)="onSubmit(form.value)">Submit
              </button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    mat-card {
      max-width: 400px;
    }

  `]
})
export class MovieAddComponent implements OnInit {

  form: FormGroup;
  validationMessage = 'This field is required';

  isEdit: boolean;

  constructor(private fb: FormBuilder,
              private store: Store<AppState>,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initForm();

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.isEdit = true;
        this.store.select(getMovieById, {id}).subscribe(data => {
          this.form.patchValue(data);
        });
      }
    })
  }

  onSubmit(data: any): void {
    if (!data) {
      return;
    }

    this.isEdit ? this.editMovie(data) : this.addMovie(data);

    this.router.navigate(['/movies']);
  }

  addMovie(data: any): void {
    const movie: Movie = {
      title: data.title,
      description: data.description
    };
    this.store.dispatch(addMovie({movie}));
  }

  editMovie(data: any): void {
    const movie: Movie = {
      id: data.id,
      title: data.title,
      description: data.description
    };
    this.store.dispatch(editMovie({movie}));
  }

  initForm(): void {
    this.form = this.fb.group({
      id: undefined,
      title: [undefined, Validators.required],
      description: [undefined, Validators.required]
    });
  }
}
