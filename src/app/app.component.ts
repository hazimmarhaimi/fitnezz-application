import { Component } from '@angular/core';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-navigation></app-navigation> -->
    <div class="content">
    <router-outlet></router-outlet>

    </div>
  `,
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    // NavigationComponent,
    RouterOutlet
  ]
})
export class AppComponent {
  title = 'fitness-tracker';
}
