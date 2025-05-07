import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WorkoutComponent } from './pages/workout/workout.component';
import { LoginComponent } from './pages/login/login.component';
import { UsermanagementComponent } from './pages/usermanagement/usermanagement.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'workouts', component: WorkoutComponent },
  { path: '', component: LoginComponent },
  { path: 'usermanagement', component: UsermanagementComponent },
  { path: '**', redirectTo: 'login' } // Optional: Redirect invalid routes to login
];
