// services/transaction.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CuentaDtoResponse } from '../models/cuenta-dto-response.model';
import { CuentaDtoRequest } from '../models/cuenta-dto-request.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private apiUrl = 'http://localhost:8085/api/v1/transacciones';

  constructor(private http: HttpClient) {}

  getAllTransactions(): Observable<CuentaDtoResponse> {
    return this.http.get<CuentaDtoResponse>(`${this.apiUrl}/all`);
  }

  // checkBalance(cuentaId: number, request: CuentaDtoRequest): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/saldo/${cuentaId}`, request);
  // }

  checkBalance(cuentaId: number): Observable<any> {
    console.log('Checking balance for account ID:', cuentaId);
    console.log('API URL:', `${this.apiUrl}/saldo/${cuentaId}`);

    return this.http.get(`${this.apiUrl}/saldo/${cuentaId}`);
  }

  deposit(
    numeroCuenta: string,
    monto: number,
    tipoCuenta: string,
    username: string
  ): Observable<any> {
    console.log(
      `Api URL: ${this.apiUrl}/deposito/${numeroCuenta}/${tipoCuenta}`
    );
    return this.http.post(
      `${this.apiUrl}/deposito/${numeroCuenta}/${tipoCuenta}`,
      { numeroCuenta, monto, tipoCuenta, username }
    );
  }

  withdraw(
    numeroCuenta: string,
    monto: number,
    tipoCuenta: string,
    username: string
  ): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/retiro/${numeroCuenta}/${tipoCuenta}`,
      { numeroCuenta, monto, tipoCuenta, username }
    );
  }
}
