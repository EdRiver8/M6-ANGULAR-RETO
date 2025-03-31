import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '../../services/transaction.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-deposit',
  template: `
    <mat-card>
      <mat-card-title>Depositar</mat-card-title>
      <mat-card-content>
        <form [formGroup]="depositForm" (ngSubmit)="onSubmit()">
          <mat-form-field appearance="outline">
            <mat-label>Número de Cuenta</mat-label>
            <input matInput formControlName="numeroCuenta" required />
            <mat-error
              *ngIf="depositForm.controls['numeroCuenta'].hasError('required')"
              >Número de Cuenta es requerido</mat-error
            >
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Monto</mat-label>
            <input
              matInput
              type="number"
              formControlName="monto"
              required
              min="0"
            />
            <mat-error
              *ngIf="depositForm.controls['monto'].hasError('required')"
              >Monto es requerido</mat-error
            >
            <mat-error *ngIf="depositForm.controls['monto'].hasError('min')"
              >Monto debe ser mayor o igual a 0</mat-error
            >
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Tipo de Cuenta</mat-label>
            <mat-select formControlName="tipoCuenta" required>
              <mat-option value="Basica">BASICA</mat-option>
              <mat-option value="Premium">PREMIUM</mat-option>
            </mat-select>
            <mat-error
              *ngIf="depositForm.controls['tipoCuenta'].hasError('required')"
              >Tipo de Cuenta es requerido</mat-error
            >
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Usuario</mat-label>
            <input matInput formControlName="username" required />
            <mat-error
              *ngIf="depositForm.controls['username'].hasError('required')"
              >Usuario es requerido</mat-error
            >
          </mat-form-field>
          <button
            mat-raised-button
            color="primary"
            type="submit"
            [disabled]="depositForm.invalid"
          >
            Depositar
          </button>
          <div *ngIf="successMessage" class="success-message">
            {{ successMessage }}
          </div>
          <div *ngIf="errorMessage" class="error-message">
            {{ errorMessage }}
          </div>
        </form>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./deposit.component.css'],
})
export class DepositComponent {
  depositForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private transactionService: TransactionService,
    private snackBar: MatSnackBar
  ) {
    this.depositForm = this.fb.group({
      numeroCuenta: ['', Validators.required],
      monto: ['', [Validators.required, Validators.min(0)]],
      tipoCuenta: ['', Validators.required],
      username: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.depositForm.valid) {
      const { numeroCuenta, monto, tipoCuenta, username } =
        this.depositForm.value;
      this.transactionService
        .deposit(numeroCuenta, monto, tipoCuenta, username)
        .subscribe(
          (response) => {
            console.log('Depósito exitoso:', response);
            this.successMessage = 'Depósito realizado con éxito';
            this.errorMessage = '';
            this.snackBar.open(this.successMessage, 'Cerrar', {
              duration: 3000,
            });
            this.depositForm.reset();
          },
          (error) => {
            this.errorMessage = 'Error al realizar el depósito';
            this.successMessage = '';
            this.snackBar.open(this.errorMessage, 'Cerrar', { duration: 3000 });
          }
        );
    }
  }
}
