// models/cuenta-dto-response.model.ts
export interface CuentaDtoResponse {
  id: number;
  numeroCuenta: string;
  saldo: number;
  tipoCuenta: string;
  username: string;
  email: string;
}
