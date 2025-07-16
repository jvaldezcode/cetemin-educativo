import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lesson-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <!-- Header -->
    <div class="bg-white border-b border-gray-200 px-6 py-4">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">Seguridad Industrial</h1>
          <p class="text-gray-600">Módulo 2 - Sesión 3: Identificación de Riesgos</p>
        </div>
        <div class="flex items-center space-x-4">
          <span class="text-sm text-gray-500">Progreso: 60%</span>
          <div class="w-32 bg-gray-200 rounded-full h-2">
            <div class="bg-blue-600 h-2 rounded-full" style="width: 60%"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 bg-gray-50 min-h-[80vh]">
      <!-- Panel de Chat con IA -->
      <div class="lg:col-span-4 bg-white rounded-lg shadow p-4 flex flex-col">
        <h2 class="text-lg font-semibold mb-4">Chat con tu profesor IA</h2>
        <div class="flex-1 overflow-y-auto mb-4 border rounded p-3 min-h-[300px]">
          <div *ngFor="let msg of mensajes" class="mb-3">
            <div *ngIf="msg.ia" class="bg-blue-50 p-2 rounded-lg">
              <span class="font-semibold text-blue-700">Sophia Fuentes:</span>
              <p class="text-gray-800">{{ msg.texto }}</p>
            </div>
            <div *ngIf="!msg.ia" class="bg-gray-50 p-2 rounded-lg text-right">
              <p class="text-gray-800">{{ msg.texto }}</p>
              <span class="text-xs text-gray-500">Tú</span>
            </div>
          </div>
        </div>
        <div class="flex gap-2">
          <input 
            [(ngModel)]="mensajeUsuario" 
            (keyup.enter)="enviarMensaje()"
            class="flex-1 border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            placeholder="Escribe tu pregunta...">
          <button 
            (click)="enviarMensaje()" 
            class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Enviar
          </button>
        </div>
      </div>

      <!-- Panel de Contenido Multimedia -->
      <div [ngClass]="{
        'lg:col-span-5': !panelOculto,
        'lg:col-span-8': panelOculto
      }" class="bg-white rounded-lg shadow p-4 flex flex-col transition-all duration-300">
        <h2 class="text-lg font-semibold mb-4">Contenido de la Sesión</h2>
        <div class="flex-1 flex items-center justify-center">
          <div *ngIf="tipoContenido === 'imagen'" class="text-center">
            <img 
              [src]="contenidoActual" 
              alt="Contenido de la sesión"
              class="rounded shadow-lg max-h-64 mb-4 mx-auto">
            <p class="text-gray-600">Imagen explicativa del tema actual</p>
          </div>
          <div *ngIf="tipoContenido === 'video'" class="text-center">
            <video 
              [src]="contenidoActual" 
              controls 
              class="rounded shadow-lg max-h-64 mb-4 mx-auto">
              Tu navegador no soporta el elemento video.
            </video>
            <p class="text-gray-600">Video explicativo del tema actual</p>
          </div>
          <div *ngIf="tipoContenido === 'diapositiva'" class="text-center">
            <div class="bg-gray-100 p-6 rounded shadow-lg max-h-64 mb-4 mx-auto max-w-md">
              <h3 class="text-lg font-semibold mb-2">Diapositiva Actual</h3>
              <p class="text-gray-700">{{ contenidoActual }}</p>
            </div>
            <p class="text-gray-600">Diapositiva explicativa del tema actual</p>
          </div>
        </div>
      </div>

      <!-- Panel de Progreso y Navegación -->
      <div 
        [ngClass]="{
          'lg:col-span-3': !panelOculto,
          'lg:col-span-0': panelOculto
        }" 
        class="bg-white rounded-lg shadow p-4 flex flex-col transition-all duration-300 overflow-hidden"
        [style.max-width]="panelOculto ? '0px' : 'none'"
        [style.padding]="panelOculto ? '0px' : '1rem'">
        
        <!-- Botón Toggle -->
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold">Progreso del Módulo</h2>
          <button 
            (click)="togglePanel()"
            class="p-2 bg-gray-100 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-lg transition-colors border border-gray-300 shadow-sm"
            [title]="panelOculto ? 'Mostrar progreso' : 'Ocultar progreso'">
            <svg *ngIf="!panelOculto" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <svg *ngIf="panelOculto" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
        </div>

        <div class="flex-1">
          <ul class="space-y-2">
            <li *ngFor="let sesion of sesiones" 
                class="flex items-center justify-between p-2 rounded"
                [ngClass]="{
                  'bg-blue-50 border-l-4 border-blue-500': sesion.actual,
                  'bg-gray-50': !sesion.actual && !sesion.completada,
                  'bg-green-50': sesion.completada
                }">
              <span [ngClass]="{
                'font-semibold text-blue-700': sesion.actual,
                'text-gray-600': !sesion.actual && !sesion.completada,
                'text-green-700': sesion.completada
              }">{{ sesion.nombre }}</span>
              <span *ngIf="sesion.completada" class="text-green-600 text-lg">✔</span>
              <span *ngIf="sesion.actual" class="text-blue-600 text-sm">Actual</span>
            </li>
          </ul>
        </div>
        <div class="mt-4 space-y-2">
          <button 
            class="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
            (click)="siguienteSesion()">
            Siguiente sesión
          </button>
          <button 
            class="w-full bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
            (click)="anteriorSesion()">
            Sesión anterior
          </button>
        </div>
      </div>
    </div>

    <!-- Indicador flotante cuando el panel está oculto -->
    <div 
      *ngIf="panelOculto"
      class="fixed top-48 right-4 bg-blue-600 text-white px-3 py-2 rounded-lg shadow-lg z-50 cursor-pointer"
      (click)="togglePanel()"
      title="Mostrar progreso">
      <div class="flex items-center space-x-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        <span class="text-sm font-medium">60%</span>
      </div>
    </div>
  `,
  styles: []
})
export class LessonDetailComponent {
  mensajeUsuario = '';
  tipoContenido = 'imagen';
  contenidoActual = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop';
  panelOculto = false; // Nuevo estado para controlar la visibilidad

  mensajes = [
    { ia: true, texto: '¡Hola! Soy tu profesor IA. Hoy vamos a aprender sobre identificación de riesgos en el trabajo. ¿Estás listo para comenzar?' },
    { ia: false, texto: 'Sí, estoy listo para aprender' },
    { ia: true, texto: 'Perfecto. Primero, observa la imagen que se muestra. ¿Qué riesgos puedes identificar en esta situación laboral?' }
  ];

  sesiones = [
    { nombre: 'Sesión 1: Introducción', completada: true, actual: false },
    { nombre: 'Sesión 2: Conceptos básicos', completada: true, actual: false },
    { nombre: 'Sesión 3: Identificación de Riesgos', completada: false, actual: true },
    { nombre: 'Sesión 4: Medidas de Prevención', completada: false, actual: false },
    { nombre: 'Sesión 5: Evaluación', completada: false, actual: false }
  ];

  togglePanel() {
    this.panelOculto = !this.panelOculto;
  }

  enviarMensaje() {
    if (this.mensajeUsuario.trim()) {
      this.mensajes.push({ ia: false, texto: this.mensajeUsuario });
      
      // Simular respuesta de la IA
      setTimeout(() => {
        this.mensajes.push({ 
          ia: true, 
          texto: 'Excelente pregunta. La IA está procesando tu respuesta y te dará retroalimentación personalizada.' 
        });
      }, 1000);
      
      this.mensajeUsuario = '';
    }
  }

  siguienteSesion() {
    alert('Avanzando a la siguiente sesión...');
  }

  anteriorSesion() {
    alert('Retrocediendo a la sesión anterior...');
  }
}