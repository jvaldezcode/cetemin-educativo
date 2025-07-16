import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SidebarComponent } from './sidebar.component';
import { HeaderComponent } from './header.component';
import { SidebarService } from '../../core/services/sidebar.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent, HeaderComponent],
  template: `
    <div class="flex h-screen bg-gray-100">
      <!-- Header (siempre visible) -->
      <div class="absolute top-0 left-0 right-0 z-40">
        <app-header></app-header>
      </div>

      <!-- Sidebar (oculto en lesson-detail) -->
      <div 
        *ngIf="!isLessonDetailPage"
        [ngClass]="{
          'w-60': sidebarVisible,
          'w-0': !sidebarVisible
        }"
        class="bg-white shadow-lg transition-all duration-300 overflow-hidden relative"
        [style.top]="'64px'"
        [style.height]="'calc(100vh - 64px)'">
        <app-sidebar></app-sidebar>
      </div>

      <!-- Main Content -->
      <div 
        class="flex-1 flex flex-col overflow-hidden" 
        [style.margin-top]="'64px'"
        [ngClass]="{
          'ml-0': isLessonDetailPage || (!isLessonDetailPage && !sidebarVisible),
          'ml-4': !isLessonDetailPage && sidebarVisible
        }">
        <!-- Page Content -->
        <main class="flex-1 overflow-auto transition-all duration-300 p-6">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
  styles: []
})
export class MainLayoutComponent {
  sidebarVisible = true;
  isLessonDetailPage = false;

  constructor(
    private router: Router,
    private sidebarService: SidebarService
  ) {
    // Verificar ruta actual al inicializar
    this.checkCurrentRoute();
    
    // Suscribirse a cambios del sidebar
    this.sidebarService.sidebarVisible$.subscribe(visible => {
      this.sidebarVisible = visible;
    });
    
    // Detectar cambios de ruta
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.checkCurrentRoute();
    });
  }

  private checkCurrentRoute() {
    this.isLessonDetailPage = this.router.url.includes('/lessons/');
    
    // En lesson-detail, no necesitamos manejar el sidebar
    if (!this.isLessonDetailPage) {
      this.sidebarService.setSidebarVisible(true);
    }
  }
}