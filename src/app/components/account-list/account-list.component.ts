import { Component, Input } from '@angular/core';
import { CuentaDtoResponse } from '../../models/cuenta-dto-response.model';

@Component({
  selector: 'app-account-list',
  template: `
    <h3>Cuentas</h3>
    <table mat-table [dataSource]="cuentas" class="mat-elevation-z8">
      <ng-container matColumnDef="id">
        <th mat-header-cell *matHeaderCellDef>ID</th>
        <td mat-cell *matCellDef="let cuenta">{{ cuenta.id }}</td>
      </ng-container>

      <ng-container matColumnDef="numeroCuenta">
        <th mat-header-cell *matHeaderCellDef>Número de Cuenta</th>
        <td mat-cell *matCellDef="let cuenta">{{ cuenta.numeroCuenta }}</td>
      </ng-container>

      <ng-container matColumnDef="saldo">
        <th mat-header-cell *matHeaderCellDef>Saldo</th>
        <td mat-cell *matCellDef="let cuenta">
          {{ cuenta.saldo | currency : 'USD' : 'symbol' : '1.2-2' }}
        </td>
      </ng-container>

      <ng-container matColumnDef="tipoCuenta">
        <th mat-header-cell *matHeaderCellDef>Tipo de Cuenta</th>
        <td mat-cell *matCellDef="let cuenta">
          {{ cuenta.tipoCuenta | uppercase }}
        </td>
      </ng-container>

      <ng-container matColumnDef="username">
        <th mat-header-cell *matHeaderCellDef>Usuario</th>
        <td mat-cell *matCellDef="let cuenta">
          {{ cuenta.username | uppercase }}
        </td>
      </ng-container>

      <ng-container matColumnDef="email">
        <th mat-header-cell *matHeaderCellDef>Email</th>
        <td mat-cell *matCellDef="let cuenta">
          {{ cuenta.email | lowercase }}
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
    </table>
  `,
  styleUrls: ['./account-list.component.css'],
})
export class AccountListComponent {
  @Input() cuentas: CuentaDtoResponse[] = [];
  displayedColumns: string[] = [
    'id',
    'numeroCuenta',
    'saldo',
    'tipoCuenta',
    'username',
    'email',
  ];
}
