import { Component,HostListener  } from '@angular/core';
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
  isExpanded: boolean = true;
  isResizing: boolean = false;
  sidebarWidth: number = 200; // Default width in pixels
  minWidth: number = 60; // Minimum width when minimized
  maxWidth: number = 400; // Maximum width when expanded
  navItems = [
    { name: 'Dashboard', route: '/dashboard', icon: 'dashboard' },
    { name: 'Workouts', route: '/workouts', icon: 'fitness_center' },
    { name: 'Progress', route: '/progress', icon: 'trending_up' },
    { name: 'User Management', route: '/usermanagement', icon: 'manage_accounts' },
    { name: 'Logout', route: '/login', icon: 'logout' }
  ];

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
    this.sidebarWidth = this.isExpanded ? 200 : this.minWidth;
  }

  startResize(event: MouseEvent) {
    this.isResizing = true;
    event.preventDefault();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isResizing) {
      const newWidth = event.clientX;
      if (newWidth >= this.minWidth && newWidth <= this.maxWidth) {
        this.sidebarWidth = newWidth;
        this.isExpanded = this.sidebarWidth > this.minWidth;
      }
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.isResizing = false;
  }
}
