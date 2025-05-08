import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService, LoginCredentials, AuthResponse } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Added for spinner
import { MatIconModule } from '@angular/material/icon'; // Added for mat-icon

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
    MatCheckboxModule,
    RouterModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatIconModule // Added for mat-icon
  ]
})
export class LoginComponent implements OnInit {
  credentials: LoginCredentials = { username: '', password: '' };
  rememberMe: boolean = false;
  isLoading: boolean = false; // Loading state
  isSuccess: boolean = false; // Success state

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  onSubmit() {
    this.isLoading = true; // Start loading
    this.isSuccess = false; // Reset success state
    this.authService.login(this.credentials).subscribe({
      next: (response: AuthResponse) => {
        this.isLoading = false; // Stop loading
        this.isSuccess = true; // Set success state
        if (this.rememberMe) {
          localStorage.setItem('rememberedUsername', this.credentials.username);
          localStorage.setItem('rememberedPassword', this.credentials.password);
        } else {
          localStorage.removeItem('rememberedUsername');
          localStorage.removeItem('rememberedPassword');
        }
        console.log('Login successful, token:', response.token);
        setTimeout(() => {
          this.isSuccess = false; // Reset success after a delay (e.g., 1 second)
          this.router.navigate(['/dashboard']);
        }, 1000); // Delay to show success tick
      },
      error: (error) => {
        this.isLoading = false; // Stop loading on error
        this.snackBar.open(`Login failed: ${error.message}`, 'Close', {
          duration: 5000,
          panelClass: ['error-snackbar'],
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      }
    });
  }

  ngOnInit() {
    const rememberedUsername = localStorage.getItem('rememberedUsername');
    const rememberedPassword = localStorage.getItem('rememberedPassword');
    if (rememberedUsername && rememberedPassword) {
      this.credentials.username = rememberedUsername;
      this.credentials.password = rememberedPassword;
      this.rememberMe = true;
    }
  }
}
