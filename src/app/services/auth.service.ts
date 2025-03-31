import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  login(username: string, password: string): Observable<boolean> {
    return new Observable((observer) => {
      if (
        username === 'edwriver@bancapsula.com' &&
        password === 'password123'
      ) {
        this.isAuthenticatedSubject.next(true);
        observer.next(true);
      } else {
        this.isAuthenticatedSubject.next(false);
        observer.next(false);
      }
      observer.complete();
    });
  }

  logout() {
    this.isAuthenticatedSubject.next(false);
  }
}
