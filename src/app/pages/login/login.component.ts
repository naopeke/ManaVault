import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormsModule, NgForm, Validators } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule, FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, PasswordModule, DividerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  http = inject(HttpClient);
  router = inject(Router);

  // public formGroup!: FormGroup;
  value: string | undefined;
  errorMessage: string | null = null;

  // constructor(){
  //   this.builForm();
  // }


  // private builForm(){
  //   this.formGroup = this.fb.nonNullable.group({
  //     email: ['', [Validators.required]],
  //     password: ['', [Validators.required]]
  //   });
    
  // }


  // onSubmit(): void {

  // }

  constructor(){}

  onSubmit(form: NgForm):void {
    const { username, password } = form.value;
  }
}
