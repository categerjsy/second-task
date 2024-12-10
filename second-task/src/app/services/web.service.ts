import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  private baseUrl: string = 'https://testapiserver.com'; // Server IP address
  private apiKey: string = '9f02f499-cd68-4ede-a3e8-fbb00c3bcde8'; // ApiKey
  private tokenKey: string = 'authToken';
  constructor(private http: HttpClient) { }

  // Helper method to create headers
  private createHeaders(additionalHeaders?: HttpHeaders): HttpHeaders {
    let headers = new HttpHeaders({
      'ApiKey': this.apiKey,
      'Content-Type': 'application/json' // Default content type
    });

    // Retrieve token from localStorage and add to headers if available
    const token = localStorage.getItem(this.tokenKey);
    if (token) {
      headers = headers.set('Authorization', token); // Add Bearer token
    }

    if (additionalHeaders) {
      additionalHeaders.keys().forEach(key => {
        headers = headers.set(key, additionalHeaders.get(key)!);
      });
    }


    return headers;
  }

  // GET request method
  get(endpoint: string, additionalHeaders?: HttpHeaders): Observable<any> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = this.createHeaders(additionalHeaders);
    return this.http.get<any>(url, { headers });
  }

  // POST request method
  post(endpoint: string, data: any, additionalHeaders?: HttpHeaders): Observable<any> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = this.createHeaders(additionalHeaders);
    return this.http.post<any>(url, data, { headers });
  }

  // PATCH request method
  patch(endpoint: string, data: any, additionalHeaders?: HttpHeaders): Observable<any> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = this.createHeaders(additionalHeaders);
    return this.http.patch<any>(url, data, { headers });
  }

  // DELETE request method
  delete(endpoint: string, additionalHeaders?: HttpHeaders): Observable<any> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = this.createHeaders(additionalHeaders);
    return this.http.delete<any>(url, { headers });
  }
}
