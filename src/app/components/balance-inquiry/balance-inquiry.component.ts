import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '../../services/transaction.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-balance-inquiry',
  template: `
    <mat-card>
      <mat-card-title>Consultar Saldo</mat-card-title>
      <mat-card-content>
        <form [formGroup]="balanceForm" (ngSubmit)="onSubmit()">
          <mat-form-field appearance="outline">
            <mat-label>ID de Cuenta</mat-label>
            <input matInput type="number" formControlName="cuentaId" required />
            <mat-error
              *ngIf="balanceForm.controls['cuentaId'].hasError('required')"
              >ID de Cuenta es requerido</mat-error
            >
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Número de Cuenta</mat-label>
            <input matInput formControlName="numeroCuenta" required />
            <mat-error
              *ngIf="balanceForm.controls['numeroCuenta'].hasError('required')"
              >Número de Cuenta es requerido</mat-error
            >
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Tipo de Cuenta</mat-label>
            <mat-select formControlName="tipoCuenta" required>
              <mat-option value="Basica">BASICA</mat-option>
              <mat-option value="Premium">PREMIUM</mat-option>
            </mat-select>
            <mat-error
              *ngIf="balanceForm.controls['tipoCuenta'].hasError('required')"
              >Tipo de Cuenta es requerido</mat-error
            >
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Usuario</mat-label>
            <input matInput formControlName="username" required />
            <mat-error
              *ngIf="balanceForm.controls['username'].hasError('required')"
              >Usuario es requerido</mat-error
            >
          </mat-form-field>
          <button
            mat-raised-button
            color="primary"
            type="submit"
            [disabled]="balanceForm.invalid"
          >
            Consultar Saldo
          </button>
          <div *ngIf="saldo !== null" class="saldo-message">
            Saldo: {{ saldo | number : '1.2-2' }}
          </div>
          <div *ngIf="errorMessage" class="error-message">
            {{ errorMessage }}
          </div>
        </form>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./balance-inquiry.component.css'],
})
export class BalanceInquiryComponent {
  balanceForm: FormGroup;
  saldo: number | null = null;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private transactionService: TransactionService,
    private snackBar: MatSnackBar
  ) {
    this.balanceForm = this.fb.group({
      cuentaId: ['', Validators.required],
      numeroCuenta: ['', Validators.required],
      tipoCuenta: ['', Validators.required],
      username: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.balanceForm.valid) {
      const { cuentaId, numeroCuenta, tipoCuenta, username } =
        this.balanceForm.value;
      this.transactionService
        // .checkBalance(cuentaId, { numeroCuenta, tipoCuenta, username })
        .checkBalance(cuentaId)
        .subscribe(
          (data: any) => {
            console.log('Balance response:', data);
            this.saldo = data;
            this.errorMessage = '';
          },
          (error) => {
            this.errorMessage = 'Error al consultar el saldo';
            this.saldo = null;
            this.snackBar.open(this.errorMessage, 'Cerrar', { duration: 3000 });
          }
        );
    }
  }
}
