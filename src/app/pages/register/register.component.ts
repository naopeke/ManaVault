import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormsModule, NgForm } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { getFirebaseErrorMessage } from '../../utilities/auth-errors';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ButtonModule, FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, PasswordModule, DividerModule, ToastModule, RouterModule],
  providers: [MessageService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  http = inject(HttpClient);
  authService = inject(AuthService);
  router = inject(Router);
  messageService = inject(MessageService);

  value: string | undefined;
  errorMessage: string | null = null;

  onSubmit(form: NgForm): void{
    if (form.valid){
        const { username, email, password } = form.value;
        console.log(form.value);
        this.authService.register(username, email, password)
            .subscribe({
                next: () => {
                  console.log('register success')
                    this.router.navigateByUrl('/');
                },
                error: (err) => {
                    this.errorMessage = err.code;
                    const errorMessage = getFirebaseErrorMessage(err);
                    this.messageService.add({ severity: 'error', summary: 'Registration Error', detail: errorMessage});
                } 
            });
    }
  }
}
