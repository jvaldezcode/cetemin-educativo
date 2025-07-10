import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="bg-white border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <a routerLink="/" class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-lg">C</span>
              </div>
              <span class="text-xl font-bold text-gray-900">CETEMIN</span>
            </a>
          </div>

          <!-- Navigation -->
          <nav class="hidden md:flex space-x-8">
            <a routerLink="/dashboard" 
               routerLinkActive="text-blue-600 border-blue-600"
               class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium border-b-2 border-transparent transition-colors">
              Dashboard
            </a>
            <a routerLink="/courses" 
               routerLinkActive="text-blue-600 border-blue-600"
               class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium border-b-2 border-transparent transition-colors">
              Cursos
            </a>
            <a routerLink="/my-learning" 
               routerLinkActive="text-blue-600 border-blue-600"
               class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium border-b-2 border-transparent transition-colors">
              Mi Aprendizaje
            </a>
          </nav>

          <!-- Search -->
          <div class="flex-1 max-w-lg mx-8 hidden lg:block">
            <div class="relative">
              <input type="text" 
                     placeholder="Buscar cursos..." 
                     class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- User Menu -->
          <div class="flex items-center space-x-4">
            <!-- Notifications -->
            <button class="p-2 text-gray-400 hover:text-gray-600 relative">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
              <span class="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"></span>
            </button>

            <!-- User Avatar -->
            <div class="relative">
              <button (click)="logout()" class="flex items-center space-x-2 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:bg-gray-100 px-2 py-1 rounded-lg transition-colors">
                <img class="h-8 w-8 rounded-full" 
                     [src]="currentUser?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'" 
                     alt="User avatar">
                <span class="hidden md:block text-gray-700">{{ currentUser?.firstName }} {{ currentUser?.lastName }}</span>
                <svg class="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: []
})
export class HeaderComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

  get currentUser() {
    return this.authService.getCurrentUser();
  }
} 