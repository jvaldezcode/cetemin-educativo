import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <aside class="w-64 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      <div class="p-6">
        <!-- User Profile Section -->
        <div class="flex items-center space-x-3 mb-6">
          <img class="h-10 w-10 rounded-full" 
               [src]="currentUser?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'" 
               alt="User avatar">
          <div>
            <h3 class="text-sm font-medium text-gray-900">{{ currentUser?.firstName }} {{ currentUser?.lastName }}</h3>
            <p class="text-xs text-gray-500">{{ currentUser?.role === 'admin' ? 'Administrador' : currentUser?.role === 'teacher' ? 'Profesor' : 'Estudiante' }}</p>
          </div>
        </div>

        <!-- Navigation Menu -->
        <nav class="space-y-2">
          <!-- Dashboard -->
          <a routerLink="/dashboard" 
             routerLinkActive="bg-blue-50 text-blue-700 border-blue-200"
             class="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg border border-transparent hover:bg-gray-50 hover:text-gray-900 transition-colors">
            <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>
            </svg>
            Dashboard
          </a>

          <!-- My Learning -->
          <a routerLink="/my-learning" 
             routerLinkActive="bg-blue-50 text-blue-700 border-blue-200"
             class="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg border border-transparent hover:bg-gray-50 hover:text-gray-900 transition-colors">
            <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            Mi Aprendizaje
          </a>

          <!-- Courses -->
          <a routerLink="/courses" 
             routerLinkActive="bg-blue-50 text-blue-700 border-blue-200"
             class="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg border border-transparent hover:bg-gray-50 hover:text-gray-900 transition-colors">
            <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            </svg>
            Cursos
          </a>

          <!-- Certificates -->
          <a routerLink="/certificates" 
             routerLinkActive="bg-blue-50 text-blue-700 border-blue-200"
             class="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg border border-transparent hover:bg-gray-50 hover:text-gray-900 transition-colors">
            <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
            </svg>
            Certificados
          </a>

          <!-- Progress -->
          <a routerLink="/progress" 
             routerLinkActive="bg-blue-50 text-blue-700 border-blue-200"
             class="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg border border-transparent hover:bg-gray-50 hover:text-gray-900 transition-colors">
            <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
            Progreso
          </a>
        </nav>

        <!-- Divider -->
        <div class="border-t border-gray-200 my-6"></div>

        <!-- Quick Stats -->
        <div class="space-y-4">
          <h4 class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Estadísticas</h4>
          
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-600">Cursos en progreso</span>
              <span class="text-sm font-medium text-gray-900">3</span>
            </div>
            
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-600">Cursos completados</span>
              <span class="text-sm font-medium text-gray-900">12</span>
            </div>
            
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-600">Horas aprendidas</span>
              <span class="text-sm font-medium text-gray-900">48h</span>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="border-t border-gray-200 my-6"></div>

        <!-- Settings -->
        <a routerLink="/settings" 
           class="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors">
          <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          Configuración
        </a>
      </div>
    </aside>
  `,
  styles: []
})
export class SidebarComponent {
  constructor(private authService: AuthService) {}

  get currentUser() {
    return this.authService.getCurrentUser();
  }
} 