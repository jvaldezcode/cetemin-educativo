import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Page Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Mis Certificados</h1>
      <p class="mt-2 text-gray-600">Tus logros y certificaciones obtenidas.</p>
    </div>

    <!-- Certificates Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Certificate 1 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
          <svg class="h-16 w-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
          </svg>
        </div>
        <div class="p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Procesos de Molienda</h3>
          <p class="text-sm text-gray-600 mb-4">Completado el 15 de Noviembre, 2024</p>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">Código: PROC-MOL-001</span>
            <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Descargar
            </button>
          </div>
        </div>
      </div>

      <!-- Certificate 2 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
          <svg class="h-16 w-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
          </svg>
        </div>
        <div class="p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Electrónica básica</h3>
          <p class="text-sm text-gray-600 mb-4">Completado el 1 de Octubre, 2024</p>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">Código: ELEC-BAS-001</span>
            <button class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Descargar
            </button>
          </div>
        </div>
      </div>

      <!-- Certificate 3 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
          <svg class="h-16 w-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
          </svg>
        </div>
        <div class="p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Electrotécnia Industrial</h3>
          <p class="text-sm text-gray-600 mb-4">Completado el 15 de Septiembre, 2024</p>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">Código: ELECT-BAS-001</span>
            <button class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Descargar
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class CertificatesComponent {} 