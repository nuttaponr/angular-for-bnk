import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private token: string;
  constructor(private http: HttpClient) { }

  authLogin(data: User): Observable<String> {
    return this.http.post<String>(`${environment.api_url}/auth/login`, data);
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  isLogin(): boolean{
    return !!this.token;
  }
}
