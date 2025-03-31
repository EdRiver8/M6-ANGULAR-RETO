import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  template: `
    <mat-card>
      <mat-card-title>Iniciar Sesión</mat-card-title>
      <mat-card-content>
        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
          <mat-form-field appearance="outline">
            <mat-label>Usuario</mat-label>
            <input matInput formControlName="username" required />
            <mat-error
              *ngIf="loginForm.controls['username'].hasError('required')"
              >Usuario es requerido</mat-error
            >
            <mat-error *ngIf="loginForm.controls['username'].hasError('email')"
              >Usuario debe ser cliente&#64;bancapsula.com</mat-error
            >
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Contraseña</mat-label>
            <input
              matInput
              type="password"
              formControlName="password"
              required
            />
            <mat-error
              *ngIf="loginForm.controls['password'].hasError('required')"
              >Contraseña es requerida</mat-error
            >
            <mat-error
              *ngIf="loginForm.controls['password'].hasError('minlength')"
              >Contraseña debe tener al menos 6 caracteres</mat-error
            >
            <mat-error
              *ngIf="loginForm.controls['password'].hasError('pattern')"
              >Contraseña debe ser alfanumérica</mat-error
            >
          </mat-form-field>
          <button
            mat-raised-button
            color="primary"
            type="submit"
            [disabled]="loginForm.invalid"
          >
            Iniciar Sesión
          </button>
          <div *ngIf="errorMessage" class="error-message">
            {{ errorMessage }}
          </div>
        </form>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('edwriver@bancapsula.com'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^(?=.*[a-zA-Z])(?=.*[0-9])[^\s]+$/),
        ],
      ],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe(
        (success) => {
          if (success) {
            this.router.navigate(['/dashboard']);
          } else {
            this.errorMessage = 'Usuario o contraseña incorrectos';
            this.snackBar.open(this.errorMessage, 'Cerrar', { duration: 3000 });
          }
        },
        (error) => {
          this.errorMessage = 'Error al iniciar sesión';
          this.snackBar.open(this.errorMessage, 'Cerrar', { duration: 3000 });
        }
      );
    } else {
      this.errorMessage = 'Por favor, complete el formulario correctamente';
      this.snackBar.open(this.errorMessage, 'Cerrar', { duration: 3000 });
    }
  }
}
