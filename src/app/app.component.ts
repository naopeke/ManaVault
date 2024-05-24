import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './services/auth.service';
import { environment } from '../environments/environment.development';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, RegisterComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ManaVault';

  authService = inject(AuthService)

  // apiKey = environment.firebaseConfig.apiKey;
  // authDomain = environment.firebaseConfig.authDomain;
  // projectId = environment.firebaseConfig.projectId;
  // storageBucket = environment.firebaseConfig.storageBucket;
  // messagingSenderId = environment.firebaseConfig.messagingSenderId;
  // appId = environment.firebaseConfig.appId;

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      if (user){
        this.authService.currentUserSig.set({
          username: user.displayName!,
          email: user.email!,
        });
      } else {
        this.authService.currentUserSig.set(null);
      }
      console.log(this.authService.currentUserSig());
    });
  }
}
