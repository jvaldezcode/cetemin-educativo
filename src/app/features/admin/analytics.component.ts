import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Page Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Analytics</h1>
      <p class="mt-2 text-gray-600">Métricas y estadísticas de la plataforma.</p>
    </div>

    <!-- Stats Overview -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center">
          <div class="p-3 bg-blue-100 rounded-lg">
            <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
            </svg>
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-600">Usuarios Totales</p>
            <p class="text-2xl font-semibold text-gray-900">12,847</p>
            <p class="text-sm text-green-600">+12% este mes</p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center">
          <div class="p-3 bg-green-100 rounded-lg">
            <svg class="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-600">Cursos Activos</p>
            <p class="text-2xl font-semibold text-gray-900">156</p>
            <p class="text-sm text-green-600">+8% este mes</p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center">
          <div class="p-3 bg-yellow-100 rounded-lg">
            <svg class="h-8 w-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
            </svg>
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-600">Ingresos</p>
            <p class="text-2xl font-semibold text-gray-900">$45,230</p>
            <p class="text-sm text-green-600">+23% este mes</p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center">
          <div class="p-3 bg-purple-100 rounded-lg">
            <svg class="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-600">Completaciones</p>
            <p class="text-2xl font-semibold text-gray-900">8,432</p>
            <p class="text-sm text-green-600">+15% este mes</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <!-- User Growth Chart -->
      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Crecimiento de Usuarios</h3>
        <div class="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div class="text-center">
            <svg class="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
            <p class="text-gray-500">Gráfico de crecimiento</p>
          </div>
        </div>
      </div>

      <!-- Course Popularity -->
      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Cursos Más Populares</h3>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <span class="text-sm font-medium text-blue-600">1</span>
              </div>
              <span class="text-sm font-medium text-gray-900">Angular Avanzado</span>
            </div>
            <span class="text-sm text-gray-600">1,234 estudiantes</span>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <span class="text-sm font-medium text-green-600">2</span>
              </div>
              <span class="text-sm font-medium text-gray-900">React Hooks</span>
            </div>
            <span class="text-sm text-gray-600">856 estudiantes</span>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <span class="text-sm font-medium text-purple-600">3</span>
              </div>
              <span class="text-sm font-medium text-gray-900">TypeScript</span>
            </div>
            <span class="text-sm text-gray-600">654 estudiantes</span>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span class="text-sm font-medium text-yellow-600">4</span>
              </div>
              <span class="text-sm font-medium text-gray-900">JavaScript Básico</span>
            </div>
            <span class="text-sm text-gray-600">543 estudiantes</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="bg-white rounded-lg shadow">
      <div class="px-6 py-4 border-b border-gray-200">
        <h3 class="text-lg font-semibold text-gray-900">Actividad Reciente</h3>
      </div>
      <div class="p-6">
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
            <p class="text-sm text-gray-600">Nuevo usuario registrado: María López</p>
            <span class="text-xs text-gray-400">Hace 5 minutos</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-2 h-2 bg-green-500 rounded-full"></div>
            <p class="text-sm text-gray-600">Curso completado: "JavaScript Básico" por Juan Pérez</p>
            <span class="text-xs text-gray-400">Hace 15 minutos</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <p class="text-sm text-gray-600">Nuevo curso publicado: "Node.js Backend"</p>
            <span class="text-xs text-gray-400">Hace 1 hora</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
            <p class="text-sm text-gray-600">Certificado emitido: "React Hooks" para Ana García</p>
            <span class="text-xs text-gray-400">Hace 2 horas</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class AnalyticsComponent {} 