import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lesson-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Page Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Data Binding en Angular</h1>
      <p class="mt-2 text-gray-600">Lección 4 del curso Angular Avanzado</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Main Content -->
      <div class="lg:col-span-2 space-y-6">
        <!-- Video Player -->
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <div class="aspect-w-16 aspect-h-9 bg-gray-200 h-96 flex items-center justify-center">
            <div class="text-center">
              <svg class="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p class="text-gray-500">Reproductor de video</p>
            </div>
          </div>
        </div>

        <!-- Lesson Content -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">Contenido de la Lección</h2>
          <div class="prose text-gray-600">
            <p class="mb-4">
              En esta lección aprenderás sobre los diferentes tipos de data binding en Angular y cómo utilizarlos 
              para crear aplicaciones dinámicas e interactivas.
            </p>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Temas cubiertos:</h3>
            <ul class="list-disc list-inside space-y-1 text-gray-600">
              <li>Interpolation ({{ interpolationExample }})</li>
              <li>Property Binding ([property]="value")</li>
              <li>Event Binding ((event)="handler()")</li>
              <li>Two-way Binding ([(ngModel)]="property")</li>
              <li>Ejemplos prácticos</li>
            </ul>
            <p class="mt-4">
              Al final de esta lección, serás capaz de implementar todos los tipos de data binding 
              en tus componentes Angular.
            </p>
          </div>
        </div>

        <!-- Notes Section -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">Mis Notas</h2>
          <textarea 
            rows="4" 
            placeholder="Escribe tus notas aquí..."
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>
          <button class="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Guardar Notas
          </button>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="space-y-6">
        <!-- Progress -->
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Progreso</h3>
          <div class="space-y-4">
            <div>
              <div class="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progreso de la lección</span>
                <span>60%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-blue-600 h-2 rounded-full" style="width: 60%"></div>
              </div>
            </div>
            <div class="text-sm text-gray-600">
              <p>Tiempo restante: 12 minutos</p>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Navegación</h3>
          <div class="space-y-3">
            <button class="w-full px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors text-left">
              ← Lección anterior: Primer Componente
            </button>
            <button class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Marcar como completada
            </button>
            <button class="w-full px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors text-left">
              Siguiente lección: Directivas Estructurales →
            </button>
          </div>
        </div>

        <!-- Resources -->
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Recursos</h3>
          <div class="space-y-3">
            <a href="#" class="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <span>Descargar código fuente</span>
            </a>
            <a href="#" class="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <span>Documentación oficial</span>
            </a>
            <a href="#" class="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Preguntas frecuentes</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class LessonDetailComponent {
  interpolationExample = '{{data}}';
} 