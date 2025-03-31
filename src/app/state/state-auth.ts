// los estados en angular se usan para
// almacenar información que se comparte entre componentes
// y servicios, por lo que se pueden usar para almacenar
// el estado de la autenticación de un usuario.

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// los estados sirven para almacenar información que se comparte entre componentes y servicios
@Injectable({ providedIn: 'root' })
export class StateAuth {
  private _userEmail = new BehaviorSubject<string | null>(null); // cuando se usa '_', significa que es privado y se va a acceder a través de un getter
  private _userPassword = new BehaviorSubject<string | null>(null);

  // un observable es un objeto que emite notificaciones cuando cambia su valor
  get userEmail(): Observable<string | null> {
    // el observable es para que los componentes que estén suscritos a este estado, se actualicen cuando cambie el valor
    return this._userEmail.asObservable();
  }

  set userEmail(email: string | null) {
    // el método next() de un BehaviorSubject permite emitir un nuevo valor
    this._userEmail.next(email);
  }

  get userPassword(): Observable<string | null> {
    return this._userPassword.asObservable();
  }

  set userPassword(password: string | null) {
    this._userPassword.next(password);
  }
}
