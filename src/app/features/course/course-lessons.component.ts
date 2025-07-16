import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-course-lessons',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Page Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Lecciones del Curso</h1>
      <p class="mt-2 text-gray-600">Contenido detallado de las lecciones disponibles.</p>
    </div>

    <!-- Lessons List -->
    <div class="bg-white rounded-lg shadow">
      <div class="px-6 py-4 border-b border-gray-200">
        <h2 class="text-xl font-semibold text-gray-900">Lista de Lecciones</h2>
      </div>
      <div class="p-6">
        <div class="space-y-4">
          <!-- Lesson 1 -->
          <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg class="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900">Introducción a la seguridad industrial</h3>
                  <p class="text-sm text-gray-500">15 minutos • Video</p>
                </div>
              </div>
              <button class="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                Completado
              </button>
            </div>
          </div>

          <!-- Lesson 2 -->
          <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg class="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900">Normativas legales</h3>
                  <p class="text-sm text-gray-500">20 minutos • Video</p>
                </div>
              </div>
              <button class="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                Completado
              </button>
            </div>
          </div>

          <!-- Lesson 3 -->
          <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg class="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900">Actos y condiciones</h3>
                  <p class="text-sm text-gray-500">25 minutos • Video</p>
                </div>
              </div>
              <button class="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                Completado
              </button>
            </div>
          </div>

          <!-- Lesson 4 -->
          <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <div class="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg class="h-5 w-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900">Documentos legales</h3>
                  <p class="text-sm text-gray-500">30 minutos • Video</p>
                </div>
              </div>
              <button class="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                En progreso
              </button>
            </div>
          </div>

          <!-- Lesson 5 -->
          <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900">IPERC y ATS</h3>
                  <p class="text-sm text-gray-500">35 minutos • Video</p>
                </div>
              </div>
              <button class="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full">
                Bloqueado
              </button>
            </div>
          </div>

          <!-- Lesson 6 -->
          <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900">Que es un PETAR</h3>
                  <p class="text-sm text-gray-500">40 minutos • Video</p>
                </div>
              </div>
              <button class="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full">
                Bloqueado
              </button>
            </div>
          </div>

          <!-- Lesson 7 -->
          <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900">Casos reales</h3>
                  <p class="text-sm text-gray-500">45 minutos • Video</p>
                </div>
              </div>
              <button class="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full">
                Bloqueado
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class CourseLessonsComponent {} 