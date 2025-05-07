import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from '../sidebar/sidebar.component';


@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatListModule,
    MatButtonModule,
    SidebarComponent
  ]
})
export class WorkoutComponent {}
