import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-learning',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Page Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Mi Aprendizaje</h1>
      <p class="mt-2 text-gray-600">Continúa donde lo dejaste y mantén tu progreso.</p>
    </div>

    <!-- Progress Overview -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center">
          <div class="p-3 bg-blue-100 rounded-lg">
            <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-600">Cursos en Progreso</p>
            <p class="text-2xl font-semibold text-gray-900">3</p>
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
            <p class="text-sm font-medium text-gray-600">Cursos Completados</p>
            <p class="text-2xl font-semibold text-gray-900">12</p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center">
          <div class="p-3 bg-purple-100 rounded-lg">
            <svg class="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-600">Horas Aprendidas</p>
            <p class="text-2xl font-semibold text-gray-900">48h</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Current Courses -->
    <div class="bg-white rounded-lg shadow">
      <div class="px-6 py-4 border-b border-gray-200">
        <h2 class="text-xl font-semibold text-gray-900">Cursos en Progreso</h2>
      </div>
      <div class="p-6">
        <div class="space-y-6">
          <!-- Course 1 -->
          <div class="border border-gray-200 rounded-lg p-6">
            <div class="flex items-start space-x-4">
              <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900">Angular Avanzado</h3>
                <p class="text-sm text-gray-600 mb-3">Lección 5 de 12 • 42% completado</p>
                <div class="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div class="bg-blue-600 h-2 rounded-full" style="width: 42%"></div>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">Próxima lección: Componentes Avanzados</span>
                  <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Continuar
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Course 2 -->
          <div class="border border-gray-200 rounded-lg p-6">
            <div class="flex items-start space-x-4">
              <div class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900">React Hooks</h3>
                <p class="text-sm text-gray-600 mb-3">Lección 3 de 8 • 37% completado</p>
                <div class="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div class="bg-green-600 h-2 rounded-full" style="width: 37%"></div>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">Próxima lección: useEffect Hook</span>
                  <button class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    Continuar
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Course 3 -->
          <div class="border border-gray-200 rounded-lg p-6">
            <div class="flex items-start space-x-4">
              <div class="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900">TypeScript</h3>
                <p class="text-sm text-gray-600 mb-3">Lección 7 de 10 • 70% completado</p>
                <div class="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div class="bg-purple-600 h-2 rounded-full" style="width: 70%"></div>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">Próxima lección: Interfaces Avanzadas</span>
                  <button class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Continuar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Completed Courses -->
    <div class="bg-white rounded-lg shadow mt-8">
      <div class="px-6 py-4 border-b border-gray-200">
        <h2 class="text-xl font-semibold text-gray-900">Cursos Completados</h2>
      </div>
      <div class="p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="border border-gray-200 rounded-lg p-4">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-sm font-medium text-gray-900">JavaScript Básico</h4>
                <p class="text-xs text-gray-500">Completado hace 2 semanas</p>
              </div>
            </div>
          </div>

          <div class="border border-gray-200 rounded-lg p-4">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-sm font-medium text-gray-900">HTML & CSS</h4>
                <p class="text-xs text-gray-500">Completado hace 1 mes</p>
              </div>
            </div>
          </div>

          <div class="border border-gray-200 rounded-lg p-4">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-sm font-medium text-gray-900">Git Básico</h4>
                <p class="text-xs text-gray-500">Completado hace 2 meses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class MyLearningComponent {} 