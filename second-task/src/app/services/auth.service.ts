import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey: string = 'authToken'; // Key for storing the token
  private userKey: string = 'userData'; //Key for storing the user

  constructor(private webService: WebService) { }

  // Login method
  login(email: string, password: string): Observable<any> {
    const endpoint = '/api/v1/user/login';
    const data = { email, password };

    // Μετατροπή των headers σε HttpHeaders
    const headers = new HttpHeaders({
      Accept: 'application/json',
      lang: 'el',
    });

    return this.webService.post(endpoint, data, headers);
  }


  // Save token to localStorage
  setToken(token: string): void {
    let tokenVar = 'Bearer ' + token; // Token 
    localStorage.setItem(this.tokenKey, tokenVar); // Save to localStorage
  }

  // Save user data to localStorage
  setUserData(userData: any): void {
    localStorage.setItem(this.userKey, JSON.stringify(userData));
  }

  // Retrieve token from localStorage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return !!this.getToken(); // Returns true if a token exists
  }

  // Logout the user
  logout(): void {
    localStorage.removeItem(this.tokenKey); // Remove the token
    localStorage.removeItem(this.userKey); // Remove the user data
  }
}
