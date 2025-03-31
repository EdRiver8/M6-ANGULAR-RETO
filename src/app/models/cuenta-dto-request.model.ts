// models/cuenta-dto-request.model.ts
export interface CuentaDtoRequest {
  numeroCuenta: string;
  tipoCuenta: string;
  username: string;
  monto?: number;
  email?: string;
}
