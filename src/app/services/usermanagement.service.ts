import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface GetUserResponse {
  message: string;
  users: User[];
  timestamp: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  private apiUrl = `${environment.apiBaseUrl}/UserManagement/get-user`;

  constructor(private http: HttpClient) {}

  getListUser(): Observable<GetUserResponse> {
    const token = localStorage.getItem('authToken');
    if (!token) {
      return throwError(() => new Error('No authentication token found'));
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<GetUserResponse>(this.apiUrl, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    let errorMessage = 'An error occurred while fetching user data';
    if (error.status === 401) {
      errorMessage = 'Unauthorized: Invalid or missing token';
    } else if (error.status === 404) {
      errorMessage = 'No users found';
    }
    return throwError(() => new Error(errorMessage));
  }
}
