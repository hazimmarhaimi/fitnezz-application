import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatTableModule } from '@angular/material/table';

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
export class UsermanagementComponent {
  displayedColumns: string[] = ['name', 'email', 'actions'];
  users = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
    { name: 'Alice Johnson', email: 'alice@example.com' }
  ];

  deleteUser(user: any) {
    console.log('Delete user:', user);
    this.users = this.users.filter(u => u !== user);
  }
}
