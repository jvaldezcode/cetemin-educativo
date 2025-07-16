import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
        <div class="mx-auto flex justify-center">
            <img 
              src="assets/cetemin.jpg" 
              alt="CETEMIN Logo" 
              class="h-24 w-auto">
          </div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Recupera tu contraseña
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
          </p>
        </div>
        
        <form class="mt-8 space-y-6" [formGroup]="forgotPasswordForm" (ngSubmit)="onSubmit()">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Correo electrónico</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              formControlName="email"
              required 
              class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="correo@ejemplo.com">
            <div *ngIf="email?.invalid && email?.touched" class="mt-1 text-sm text-red-600">
              <span *ngIf="email?.errors?.['required']">El correo es requerido</span>
              <span *ngIf="email?.errors?.['email']">Ingresa un correo válido</span>
            </div>
          </div>

          <div>
            <button 
              type="submit" 
              [disabled]="forgotPasswordForm.invalid || isLoading"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed">
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg *ngIf="!isLoading" class="h-5 w-5 text-blue-500 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <svg *ngIf="isLoading" class="animate-spin h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </span>
              {{ isLoading ? 'Enviando...' : 'Enviar enlace de recuperación' }}
            </button>
          </div>

          <!-- Success Message -->
          <div *ngIf="successMessage" class="bg-green-50 border border-green-200 rounded-md p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm text-green-800">{{ successMessage }}</p>
              </div>
            </div>
          </div>

          <!-- Error Message -->
          <div *ngIf="errorMessage" class="bg-red-50 border border-red-200 rounded-md p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm text-red-800">{{ errorMessage }}</p>
              </div>
            </div>
          </div>

          <div class="text-center">
            <a routerLink="/auth/login" class="font-medium text-blue-600 hover:text-blue-500">
              Volver al inicio de sesión
            </a>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.forgotPasswordForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      this.successMessage = '';

      const { email } = this.forgotPasswordForm.value;

      this.authService.forgotPassword(email).subscribe({
        next: (success) => {
          if (success) {
            this.successMessage = 'Se ha enviado un enlace de recuperación a tu correo electrónico.';
          } else {
            this.errorMessage = 'No se pudo enviar el enlace de recuperación. Por favor, intenta de nuevo.';
          }
        },
        error: (error) => {
          this.errorMessage = 'Error al enviar el enlace de recuperación. Por favor, intenta de nuevo.';
          console.error('Forgot password error:', error);
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    }
  }

  get email() {
    return this.forgotPasswordForm.get('email');
  }
} 