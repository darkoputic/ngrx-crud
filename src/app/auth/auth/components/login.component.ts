import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  template: `
    <mat-card>
      <mat-card-title>Login</mat-card-title>
      <mat-card-content>
        <form [formGroup]="form">
          <p>
            <mat-form-field>
              <input type="text" matInput placeholder="Username" formControlName="username">
              <mat-error *ngIf="!form.controls['username'].valid && form.controls['username'].touched">
                {{ error }}
              </mat-error>
            </mat-form-field>
          </p>

          <p>
            <mat-form-field>
              <input type="password" matInput placeholder="Password" formControlName="password">
              <mat-error *ngIf="!form.controls['password'].valid && form.controls['password'].touched">
                {{ error }}
              </mat-error>
            </mat-form-field>
          </p>

          <div class="button">
            <button type="button" mat-button 
                    (click)="onSubmit(form.value)"
                    [disabled]="form.invalid">Login
            </button>
          </div>

        </form>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
      `
      :host {
        display: flex;
        justify-content: center;
        margin: 100px 0px;
      }

      .mat-form-field {
        width: 100%;
        min-width: 300px;
      }

      mat-card-title,
      mat-card-content {
        display: flex;
        justify-content: center;
      }

      .error {
        padding: 16px;
        width: 300px;
        color: white;
        background-color: red;
      }

      .button {
        display: flex;
        justify-content: flex-end;
      }
    `,
  ],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error = 'This field is required';
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(data: any): void {
    console.log(data);
  }

  initForm(): void {
    this.form = this.fb.group({
      username: [undefined, Validators.required],
      password: [undefined, Validators.required]
    });
  }
}
