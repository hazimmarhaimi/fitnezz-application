import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatTableModule } from '@angular/material/table';
import { UserManagementService, User, GetUserResponse } from '../../services/usermanagement.service';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.scss'],
  standalone: true,
  imports: [
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    SidebarComponent,
    CommonModule,
    MatTableModule,
  ]
})
export class UsermanagementComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'actions'];
  users: User[] = [];
  errorMessage: string | null = null;

  constructor(private userManagementService: UserManagementService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userManagementService.getListUser().subscribe({
      next: (response: GetUserResponse) => {
        this.users = response.users;
        this.errorMessage = null;
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.users = [];
        console.error('Error fetching users:', error);
      }
    });
  }

  deleteUser(user: User) {
    console.log('Delete user:', user);
    this.users = this.users.filter(u => u !== user);
  }
}
