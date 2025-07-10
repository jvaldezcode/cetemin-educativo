import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { SidebarComponent } from './sidebar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, SidebarComponent],
  template: `
    <div class="min-h-screen bg-gray-50">
      <!-- Header -->
      <app-header></app-header>
      
      <div class="flex">
        <!-- Sidebar -->
        <app-sidebar></app-sidebar>
        
        <!-- Main Content -->
        <main class="flex-1 p-6">
          <div class="max-w-7xl mx-auto">
            <!-- Router Outlet for dynamic content -->
            <router-outlet></router-outlet>
          </div>
        </main>
      </div>
    </div>
  `,
  styles: []
})
export class MainLayoutComponent {} 