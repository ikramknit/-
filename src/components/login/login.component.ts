import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  // FIX: Moved FormBuilder injection and form initialization to the constructor to resolve a type inference issue with field initializers.
  private readonly fb: FormBuilder;
  private authService = inject(AuthService);

  readonly loginForm;

  errorMessage = signal<string | null>(null);

  constructor() {
    this.fb = inject(FormBuilder);
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email ?? '';
      const password = this.loginForm.value.password ?? '';
      const success = this.authService.login(email, password);
      if (!success) {
        this.errorMessage.set('Invalid email or password. Please try again.');
      } else {
         this.errorMessage.set(null);
      }
    }
  }
}
