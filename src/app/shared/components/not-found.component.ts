import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full text-center">
        <div class="mb-8">
          <div class="mx-auto h-24 w-24 bg-blue-600 rounded-full flex items-center justify-center mb-6">
            <span class="text-white font-bold text-4xl">404</span>
          </div>
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Página no encontrada</h1>
          <p class="text-lg text-gray-600 mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        </div>
        
        <div class="space-y-4">
          <a 
            routerLink="/dashboard" 
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            Volver al Dashboard
          </a>
          
          <div class="text-sm text-gray-500">
            O intenta con estos enlaces:
          </div>
          
          <div class="flex justify-center space-x-4">
            <a routerLink="/courses" class="text-blue-600 hover:text-blue-500 text-sm">
              Cursos
            </a>
            <a routerLink="/my-learning" class="text-blue-600 hover:text-blue-500 text-sm">
              Mi Aprendizaje
            </a>
            <a routerLink="/settings" class="text-blue-600 hover:text-blue-500 text-sm">
              Configuración
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class NotFoundComponent {} 