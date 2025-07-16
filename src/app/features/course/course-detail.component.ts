import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Page Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Seguridad y salud en el trabajo</h1>
      <p class="mt-2 text-gray-600">Aprende Angular desde cero hasta nivel avanzado con proyectos reales.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Main Content -->
      <div class="lg:col-span-2 space-y-6">
        <!-- Course Video -->
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <div class="aspect-w-16 aspect-h-9 bg-gray-200 h-64 flex items-center justify-center">
            <div class="text-center">
              <svg class="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p class="text-gray-500">Vista previa del curso</p>
            </div>
          </div>
        </div>

        <!-- Course Description -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">Descripción del Curso</h2>
          <div class="prose text-gray-600">
            <p class="mb-4">
              Este curso te llevará desde los fundamentos básicos de Angular hasta técnicas avanzadas de desarrollo. 
              Aprenderás a construir aplicaciones web modernas, escalables y mantenibles.
            </p>
            <p class="mb-4">
              A lo largo del curso, trabajarás en proyectos reales que te ayudarán a consolidar tu conocimiento 
              y crear un portafolio impresionante.
            </p>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Lo que aprenderás:</h3>
            <ul class="list-disc list-inside space-y-1 text-gray-600">
              <li>Fundamentos de Angular y TypeScript</li>
              <li>Componentes, servicios y módulos</li>
              <li>Routing y navegación</li>
              <li>Formularios reactivos y template-driven</li>
              <li>HTTP Client y APIs</li>
              <li>Testing con Jasmine y Karma</li>
              <li>Deployment y optimización</li>
            </ul>
          </div>
        </div>

        <!-- Course Content -->
        <div class="bg-white rounded-lg shadow">
          <div class="px-6 py-4 border-b border-gray-200">
            <h2 class="text-xl font-semibold text-gray-900">Contenido del Curso</h2>
          </div>
          <div class="p-6">
            <div class="space-y-4">
              <div class="border border-gray-200 rounded-lg p-4">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="font-medium text-gray-900">Módulo 1: Introducción a la seguridad industrial</h3>
                    <p class="text-sm text-gray-500">3 lecciones • 45 minutos</p>
                  </div>
                  <span class="text-sm text-green-600">✓ Completado</span>
                </div>
              </div>
              <div class="border border-gray-200 rounded-lg p-4">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="font-medium text-gray-900">Módulo 2: Normativas legales</h3>
                    <p class="text-sm text-gray-500">5 lecciones • 1 hora 15 minutos</p>
                  </div>
                  <span class="text-sm text-blue-600">En progreso</span>
                </div>
              </div>
              <div class="border border-gray-200 rounded-lg p-4">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="font-medium text-gray-900">Módulo 3: Actos y condiciones</h3>
                    <p class="text-sm text-gray-500">4 lecciones • 1 hora</p>
                  </div>
                  <span class="text-sm text-gray-500">Bloqueado</span>
                </div>
              </div>
              <div class="border border-gray-200 rounded-lg p-4">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="font-medium text-gray-900">Módulo 4: Documentos legales</h3>
                    <p class="text-sm text-gray-500">6 lecciones • 1 hora 30 minutos</p>
                  </div>
                  <span class="text-sm text-gray-500">Bloqueado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="space-y-6">
        <!-- Course Info Card -->
        <div class="bg-white rounded-lg shadow p-6">
          <div class="text-center mb-6">
            <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900">Seguridad y salud en el trabajo</h3>
            <p class="text-2xl font-bold text-gray-900 mt-2">$49.99</p>
          </div>
          
          <div class="space-y-3 mb-6">
            <div class="flex items-center text-sm text-gray-600">
              <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
              12 lecciones
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              8 horas 30 minutos
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Nivel Intermedio
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Certificado incluido
            </div>
          </div>

          <button class="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Continuar Aprendiendo
          </button>
        </div>

        <!-- Instructor Info -->
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Instructor</h3>
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div>
              <h4 class="font-medium text-gray-900">Sophia Fuentes</h4>
              <p class="text-sm text-gray-600">Instructora especializada</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class CourseDetailComponent {} 