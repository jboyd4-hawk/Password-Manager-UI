import {Component, inject} from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Password-Manager-UI';

  authService = inject(AuthService);

  logout() {
    this.authService.logout();
  }
}
