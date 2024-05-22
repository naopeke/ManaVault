import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormsModule, NgForm } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ButtonModule, FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, PasswordModule, DividerModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  http = inject(HttpClient);
  authService = inject(AuthService);
  router = inject(Router);

  value: string | undefined;
  errorMessage: string | null = null;

  onSubmit(form: NgForm): void{
    if (form.valid){
        const { email, username, password } = form.value;
        this.authService.register(email, username, password)
            .subscribe({
                next: () => {
                    this.router.navigateByUrl('/home');
                },
                error: (err) => {
                    this.errorMessage = err.code;
                } 
            });
    }
}
}
