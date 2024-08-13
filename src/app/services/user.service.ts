import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //https://fakeapi.platzi.com/en/rest/auth-jwt/
  private getUsersApi = 'https://api.escuelajs.co/api/v1/users';
  private loginApi = 'https://api.escuelajs.co/api/v1/auth/login';

  constructor(private http: HttpClient) { }
  private userName: string = '';
  private email: string = '';

  checkUserExists(): Observable<any> {
    return this.http.get(this.getUsersApi);
  }

  setName(name: string): void {
    this.userName = name;
  }

  getName(): string {
    return this.userName;
  }

  login(data): Observable<any>{
    return this.http.post(this.loginApi, data);
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getEmail(): string {
    return this.email;
  }
}
