import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { CuentaDtoResponse } from '../../models/cuenta-dto-response.model';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard-container">
      <h2>Panel de Control</h2>
      <app-account-list [cuentas]="cuentas"></app-account-list>
      <div class="forms-container">
        <app-balance-inquiry></app-balance-inquiry>
        <app-deposit></app-deposit>
        <app-withdraw></app-withdraw>
      </div>
    </div>
  `,
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  cuentas: CuentaDtoResponse[] = [];

  constructor(private transactionService: TransactionService) {}

  // ngOnInit(): void {
  //   this.transactionService.getAllTransactions().subscribe(
  //     (data) => {
  //       this.cuentas = data;
  //     },
  //     (error) => {
  //       console.error('Error al obtener las transacciones', error);
  //     }
  //   );
  // }

  ngOnInit(): void {
    this.transactionService.getAllTransactions().subscribe(
      (response: any) => {
        // Opción 1: Si la respuesta tiene una propiedad que contiene el array de cuentas
        if (response.cuentas) {
          this.cuentas = response.cuentas;
        }
        // Opción 2: Si la respuesta es el array directamente pero necesita transformación
        else if (Array.isArray(response)) {
          this.cuentas = response.map((item) => ({
            id: item.id || 0,
            numeroCuenta: item.numeroCuenta || '',
            saldo: item.saldo || 0,
            tipoCuenta: item.tipoCuenta || '',
            username: item.username || '',
            email: item.email || '',
          }));
        }
        // Opción 3: Si no es ninguna de las anteriores, imprime la respuesta para depurar
        else {
          console.log('Respuesta recibida:', response);
          this.cuentas = []; // Asignar un array vacío como fallback
        }
      },
      (error) => {
        console.error('Error al obtener las transacciones', error);
      }
    );
  }
}
