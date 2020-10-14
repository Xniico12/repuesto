import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = new BehaviorSubject<boolean>(this.checkToken());

  private checkToken(): boolean{
    return !!localStorage.getItem('token');
  }
  login( token: string): void{
  localStorage.setItem('token', token);
  this.isLogin.next(true);
  }
  setCourrentUser(user: string): void{
  localStorage.setItem('courrentUser',user);
  }
  getCourrentUser(): string{
  return localStorage.getItem('courrentUser');
  }
  private deleteCourrentUser(): void{
  localStorage.removeItem('courrentUser');
  }
  Logout(): void{
    localStorage.removeItem('token');
    this.deleteCourrentUser();
    this.isLogin.next(false);
    console.log('elimine el usuario en session');
  }
  isLogedIn(): Observable<boolean>{
    return this.isLogin.asObservable();
  }
}
