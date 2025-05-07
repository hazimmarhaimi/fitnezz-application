import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Router ,RouterModule} from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }
    if (this.username && this.password) {
      this.errorMessage = '';
      // Simulate successful registration (in a real app, call an API here)
      console.log('Registration successful for:', this.username);
      this.router.navigate(['/login']);
    } else {
      this.errorMessage = 'Please fill in all fields';
    }
  }
}
