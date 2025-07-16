import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';

export const routes: Routes = [
  // Rutas públicas
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
  },
  
  // Rutas de autenticación
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./features/auth/login.component').then(m => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./features/auth/register.component').then(m => m.RegisterComponent)
      },
      {
        path: 'forgot-password',
        loadComponent: () => import('./features/auth/forgot-password.component').then(m => m.ForgotPasswordComponent)
      },
      {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
      }
    ]
  },

  // Rutas protegidas con layout principal
  {
    path: '',
    canActivate: [AuthGuard],
    loadComponent: () => import('./shared/layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      
      // Rutas de cursos
      {
        path: 'courses',
        children: [
          {
            path: '',
            loadComponent: () => import('./features/course/course-list.component').then(m => m.CourseListComponent)
          },
          {
            path: ':id',
            loadComponent: () => import('./features/course/course-detail.component').then(m => m.CourseDetailComponent)
          },
          {
            path: ':id/lessons',
            loadComponent: () => import('./features/course/course-lessons.component').then(m => m.CourseLessonsComponent)
          }
        ]
      },
      
      // Rutas de lecciones
      {
        path: 'lessons',
        children: [
          {
            path: ':id',
            loadComponent: () => import('./features/lesson/lesson-detail.component').then(m => m.LessonDetailComponent)
          }
        ]
      },
      
      // Rutas de mi aprendizaje
      {
        path: 'my-learning',
        loadComponent: () => import('./features/dashboard/my-learning.component').then(m => m.MyLearningComponent)
      },
      
      // Rutas de certificados
      {
        path: 'certificates',
        loadComponent: () => import('./features/dashboard/certificates.component').then(m => m.CertificatesComponent)
      },
      
      // Rutas de progreso
      {
        path: 'progress',
        loadComponent: () => import('./features/dashboard/progress.component').then(m => m.ProgressComponent)
      },
      
      // Rutas de configuración
      {
        path: 'settings',
        loadComponent: () => import('./features/dashboard/settings.component').then(m => m.SettingsComponent)
      },
      
      // Rutas de administración (solo admin)
      {
        path: 'admin',
        canActivate: [RoleGuard],
        data: { roles: ['admin'] },
        children: [
          {
            path: 'users',
            loadComponent: () => import('./features/admin/user-management.component').then(m => m.UserManagementComponent)
          },
          {
            path: 'courses',
            loadComponent: () => import('./features/admin/course-management.component').then(m => m.CourseManagementComponent)
          },
          {
            path: 'analytics',
            loadComponent: () => import('./features/admin/analytics.component').then(m => m.AnalyticsComponent)
          }
        ]
      }
    ]
  },

  // Ruta 404
  {
    path: '**',
    loadComponent: () => import('./shared/components/not-found.component').then(m => m.NotFoundComponent)
  }
];
