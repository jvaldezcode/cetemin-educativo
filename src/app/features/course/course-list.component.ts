import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Page Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Catálogo de Cursos</h1>
      <p class="mt-2 text-gray-600">Explora nuestra colección de cursos y encuentra el perfecto para ti.</p>
    </div>

    <!-- Search and Filters -->
    <div class="mb-6">
      <div class="flex flex-col sm:flex-row gap-4">
        <div class="flex-1">
          <input 
            type="text" 
            placeholder="Buscar cursos..." 
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
        </div>
        <select class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option>Todas las categorías</option>
          <option>Seguridad Industrial</option>
          <option>Informática</option>
          <option>Mantenimiento</option>
          <option>Procesos</option>
        </select>
      </div>
    </div>

    <!-- Course Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Course Card 1 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
        <div class="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
        <div class="p-6 flex flex-col h-full">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-blue-600">Seguridad Industrial</span>
              <span class="text-sm text-gray-500">4.8 ⭐</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Seguridad y salud en el trabajo</h3>
            <p class="text-gray-600 text-sm mb-4">Aprende a identificar riesgos, aplicar normas de seguridad industrial y proteger tu entorno laboral con enfoque en la prevención de accidentes y enfermedades laborales.</p>
          </div>
          <div class="flex items-center justify-between mt-auto">
            <span class="text-2xl font-bold text-gray-900"></span>
            <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Ver Curso
            </button>
          </div>
        </div>
      </div>

      <!-- Course Card 2 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
        <div class="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
        <div class="p-6 flex flex-col h-full">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-green-600">Informática</span>
              <span class="text-sm text-gray-500">4.9 ⭐</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Informática Básica</h3>
            <p class="text-gray-600 text-sm mb-4">Desarrolla habilidades esenciales en el manejo de computadoras, procesadores de texto, hojas de cálculo y herramientas digitales comunes.</p>
          </div>
          <div class="flex items-center justify-between mt-auto">
            <span class="text-2xl font-bold text-gray-900"></span>
            <button class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Ver Curso
            </button>
          </div>
        </div>
      </div>

      <!-- Course Card 3 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
        <div class="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
        <div class="p-6 flex flex-col h-full">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-purple-600">Mantenimiento</span>
              <span class="text-sm text-gray-500">4.7 ⭐</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Electrónica básica</h3>
            <p class="text-gray-600 text-sm mb-4">Aprende a identificar componentes electrónicos, leer diagramas de circuitos y realizar mediciones básicas.</p>
          </div>
          <div class="flex items-center justify-between mt-auto">
            <span class="text-2xl font-bold text-gray-900"></span>
            <button class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Ver Curso
            </button>
          </div>
        </div>
      </div>

      <!-- Course Card 4 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
        <div class="h-48 bg-gradient-to-br from-yellow-400 to-yellow-600"></div>
        <div class="p-6 flex flex-col h-full">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-yellow-600">Procesos</span>
              <span class="text-sm text-gray-500">4.6 ⭐</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Procesos metalúrgicos</h3>
            <p class="text-gray-600 text-sm mb-4">Aprende sobre los procesos metalúrgicos, desde la extracción de materias primas hasta la producción de productos metálicos.</p>
          </div>
          <div class="flex items-center justify-between mt-auto">
            <span class="text-2xl font-bold text-gray-900"></span>
            <button class="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
              Ver Curso
            </button>
          </div>
        </div>
      </div>

      <!-- Course Card 5 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
        <div class="h-48 bg-gradient-to-br from-red-400 to-red-600"></div>
        <div class="p-6 flex flex-col h-full">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-red-600">Mantenimiento</span>
              <span class="text-sm text-gray-500">4.8 ⭐</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Electrónica de equipo pesado</h3>
            <p class="text-gray-600 text-sm mb-4">Aprende a identificar componentes electrónicos, leer diagramas de circuitos y realizar mediciones básicas.</p>
          </div>
          <div class="flex items-center justify-between mt-auto">
            <span class="text-2xl font-bold text-gray-900"></span>
            <button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              Ver Curso
            </button>
          </div>
        </div>
      </div>

      <!-- Course Card 6 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
        <div class="h-48 bg-gradient-to-br from-indigo-400 to-indigo-600"></div>
        <div class="p-6 flex flex-col h-full">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-indigo-600">Procesos</span>
              <span class="text-sm text-gray-500">4.9 ⭐</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Proceso de Molienda</h3>
            <p class="text-gray-600 text-sm mb-4">Aprende sobre el proceso de molienda, desde la trituración de materias primas hasta la producción de productos molidos.</p>
          </div>
          <div class="flex items-center justify-between mt-auto">
            <span class="text-2xl font-bold text-gray-900"></span>
            <button class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Ver Curso
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class CourseListComponent {} 