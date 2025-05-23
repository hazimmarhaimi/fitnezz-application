import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WorkoutComponent } from './pages/workout/workout.component';
import { LoginComponent } from './pages/login/login.component';
import { UsermanagementComponent } from './pages/usermanagement/usermanagement.component';
import { RegisterComponent } from './pages/register/register.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]  },
  { path: 'workouts', component: WorkoutComponent ,canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'usermanagement', component: UsermanagementComponent ,canActivate: [authGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotpassword', component: DashboardComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }, // Optional: Redirect invalid routes to login
];
