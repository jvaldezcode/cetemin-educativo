import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Page Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Mi Progreso</h1>
      <p class="mt-2 text-gray-600">Seguimiento detallado de tu aprendizaje.</p>
    </div>

    <!-- Progress Overview -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center">
          <div class="p-3 bg-blue-100 rounded-lg">
            <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-600">Total Cursos</p>
            <p class="text-2xl font-semibold text-gray-900">15</p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center">
          <div class="p-3 bg-green-100 rounded-lg">
            <svg class="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-600">Completados</p>
            <p class="text-2xl font-semibold text-gray-900">12</p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center">
          <div class="p-3 bg-yellow-100 rounded-lg">
            <svg class="h-8 w-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-600">Horas</p>
            <p class="text-2xl font-semibold text-gray-900">48h</p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center">
          <div class="p-3 bg-purple-100 rounded-lg">
            <svg class="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-600">Promedio</p>
            <p class="text-2xl font-semibold text-gray-900">85%</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Detailed Progress -->
    <div class="bg-white rounded-lg shadow">
      <div class="px-6 py-4 border-b border-gray-200">
        <h2 class="text-xl font-semibold text-gray-900">Progreso por Categoría</h2>
      </div>
      <div class="p-6">
        <div class="space-y-6">
          <!-- Development -->
          <div>
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-lg font-medium text-gray-900">Seguridad y salud en el trabajo</h3>
              <span class="text-sm font-medium text-gray-600">8/10 cursos</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3">
              <div class="bg-blue-600 h-3 rounded-full" style="width: 80%"></div>
            </div>
            <p class="text-sm text-gray-500 mt-1">80% completado</p>
          </div>

          <!-- Programming -->
          <div>
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-lg font-medium text-gray-900">Informática básica</h3>
              <span class="text-sm font-medium text-gray-600">3/5 cursos</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3">
              <div class="bg-green-600 h-3 rounded-full" style="width: 60%"></div>
            </div>
            <p class="text-sm text-gray-500 mt-1">60% completado</p>
          </div>

          <!-- Design -->
          <div>
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-lg font-medium text-gray-900">Electrónica de equipo pesado</h3>
              <span class="text-sm font-medium text-gray-600">1/2 cursos</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3">
              <div class="bg-purple-600 h-3 rounded-full" style="width: 50%"></div>
            </div>
            <p class="text-sm text-gray-500 mt-1">50% completado</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="bg-white rounded-lg shadow mt-8">
      <div class="px-6 py-4 border-b border-gray-200">
        <h2 class="text-xl font-semibold text-gray-900">Actividad Reciente</h2>
      </div>
      <div class="p-6">
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
            <p class="text-sm text-gray-600">Completaste la lección "Introducción a la seguridad industrial"</p>
            <span class="text-xs text-gray-400">Hace 2 horas</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-2 h-2 bg-green-500 rounded-full"></div>
            <p class="text-sm text-gray-600">Te inscribiste en el curso "Informática básica"</p>
            <span class="text-xs text-gray-400">Ayer</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <p class="text-sm text-gray-600">Obtuviste el certificado "Procesos de Molienda"</p>
            <span class="text-xs text-gray-400">Hace 3 días</span>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
            <p class="text-sm text-gray-600">Completaste el curso "Electrónica básica"</p>
            <span class="text-xs text-gray-400">Hace 1 semana</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ProgressComponent {} 