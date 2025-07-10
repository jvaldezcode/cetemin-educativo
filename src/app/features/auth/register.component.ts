import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <div class="mx-auto h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-xl">C</span>
          </div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Crea tu cuenta
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            ¿Ya tienes una cuenta?
            <a routerLink="/auth/login" class="font-medium text-blue-600 hover:text-blue-500">
              Inicia sesión aquí
            </a>
          </p>
        </div>
        
        <form class="mt-8 space-y-6" [formGroup]="registerForm" (ngSubmit)="onSubmit()">
          <div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700">Nombre</label>
                <input 
                  id="firstName" 
                  name="firstName" 
                  type="text" 
                  formControlName="firstName"
                  required 
                  class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Nombre">
                <div *ngIf="firstName?.invalid && firstName?.touched" class="mt-1 text-sm text-red-600">
                  <span *ngIf="firstName?.errors?.['required']">El nombre es requerido</span>
                </div>
              </div>
              
              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-700">Apellido</label>
                <input 
                  id="lastName" 
                  name="lastName" 
                  type="text" 
                  formControlName="lastName"
                  required 
                  class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Apellido">
                <div *ngIf="lastName?.invalid && lastName?.touched" class="mt-1 text-sm text-red-600">
                  <span *ngIf="lastName?.errors?.['required']">El apellido es requerido</span>
                </div>
              </div>
            </div>
            
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
              <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                formControlName="password"
                required 
                class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Mínimo 6 caracteres">
              <div *ngIf="password?.invalid && password?.touched" class="mt-1 text-sm text-red-600">
                <span *ngIf="password?.errors?.['required']">La contraseña es requerida</span>
                <span *ngIf="password?.errors?.['minlength']">La contraseña debe tener al menos 6 caracteres</span>
              </div>
            </div>
            
            <div>
              <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirmar contraseña</label>
              <input 
                id="confirmPassword" 
                name="confirmPassword" 
                type="password" 
                formControlName="confirmPassword"
                required 
                class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Repite tu contraseña">
              <div *ngIf="confirmPassword?.invalid && confirmPassword?.touched" class="mt-1 text-sm text-red-600">
                <span *ngIf="confirmPassword?.errors?.['required']">Confirma tu contraseña</span>
                <span *ngIf="confirmPassword?.errors?.['passwordMismatch']">Las contraseñas no coinciden</span>
              </div>
            </div>
          </div>

          <div class="flex items-center">
            <input 
              id="terms" 
              name="terms" 
              type="checkbox" 
              formControlName="terms"
              class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
            <label for="terms" class="ml-2 block text-sm text-gray-900">
              Acepto los 
              <a href="#" class="text-blue-600 hover:text-blue-500">términos y condiciones</a>
            </label>
          </div>

          <div>
            <button 
              type="submit" 
              [disabled]="registerForm.invalid || isLoading"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed">
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg *ngIf="!isLoading" class="h-5 w-5 text-blue-500 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                </svg>
                <svg *ngIf="isLoading" class="animate-spin h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </span>
              {{ isLoading ? 'Creando cuenta...' : 'Crear cuenta' }}
            </button>
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
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class RegisterComponent {
  registerForm: FormGroup;
  isLoading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    
    return null;
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';

      const { firstName, lastName, email, password } = this.registerForm.value;

      this.authService.register({ firstName, lastName, email }).subscribe({
        next: (success) => {
          if (success) {
            this.router.navigate(['/dashboard']);
          } else {
            this.errorMessage = 'Error al crear la cuenta. Por favor, intenta de nuevo.';
          }
        },
        error: (error) => {
          this.errorMessage = 'Error al crear la cuenta. Por favor, intenta de nuevo.';
          console.error('Register error:', error);
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    }
  }

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get terms() {
    return this.registerForm.get('terms');
  }
} 