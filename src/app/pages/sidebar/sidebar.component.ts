import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '..//navigation/navigation.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    NavigationComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  navItems = [
    { name: 'Dashboard', route: '/dashboard', icon: 'dashboard' },
    { name: 'Workouts', route: '/workouts', icon: 'fitness_center' },
    { name: 'Progress', route: '/progress', icon: 'trending_up' },
    { name: 'User Management', route: '/usermanagement', icon: 'manage_accounts' },
    { name: 'Logout', route: '', icon: 'logout' }
  ];
}
