import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    // Verificar si hay un usuario en localStorage al inicializar
    this.loadUserFromStorage();
  }

  /**
   * Iniciar sesión
   */
  login(email: string, password: string): Observable<boolean> {
    // Simulación de login - en producción esto sería una llamada HTTP
    if (email === 'admin@cetemin.edu.pe' && password === 'admin123') {
      const user: User = {
        id: '1',
        email: 'admin@cetemin.edu.pe',
        firstName: 'Juan',
        lastName: 'Pérez',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        role: 'admin',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        lastLoginAt: new Date(),
        preferences: {
          language: 'es',
          theme: 'light',
          notifications: true
        }
      };
      
      this.setCurrentUser(user);
      return of(true);
    }
    
    return of(false);
  }

  /**
   * Cerrar sesión
   */
  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  /**
   * Verificar si el usuario está autenticado
   */
  isAuthenticated(): boolean {
    return this.currentUserSubject.value !== null;
  }

  /**
   * Obtener usuario actual
   */
  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  /**
   * Verificar si el usuario tiene un rol específico
   */
  hasRole(requiredRoles: string[]): boolean {
    const user = this.getCurrentUser();
    if (!user) return false;
    
    return requiredRoles.includes(user.role);
  }

  /**
   * Verificar si el usuario es admin
   */
  isAdmin(): boolean {
    return this.hasRole(['admin']);
  }

  /**
   * Verificar si el usuario es teacher
   */
  isTeacher(): boolean {
    return this.hasRole(['teacher', 'admin']);
  }

  /**
   * Verificar si el usuario es student
   */
  isStudent(): boolean {
    return this.hasRole(['student', 'teacher', 'admin']);
  }

  /**
   * Registrar nuevo usuario
   */
  register(userData: Partial<User>): Observable<boolean> {
    // Simulación de registro - en producción esto sería una llamada HTTP
    const newUser: User = {
      id: Date.now().toString(),
      email: userData.email || '',
      firstName: userData.firstName || '',
      lastName: userData.lastName || '',
      role: 'student',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      preferences: {
        language: 'es',
        theme: 'light',
        notifications: true
      }
    };
    
    this.setCurrentUser(newUser);
    return of(true);
  }

  /**
   * Actualizar perfil de usuario
   */
  updateProfile(profileData: Partial<User>): Observable<boolean> {
    const currentUser = this.getCurrentUser();
    if (!currentUser) return of(false);
    
    const updatedUser = { ...currentUser, ...profileData, updatedAt: new Date() };
    this.setCurrentUser(updatedUser);
    return of(true);
  }

  /**
   * Cambiar contraseña
   */
  changePassword(currentPassword: string, newPassword: string): Observable<boolean> {
    // Simulación de cambio de contraseña
    return of(true);
  }

  /**
   * Solicitar restablecimiento de contraseña
   */
  forgotPassword(email: string): Observable<boolean> {
    // Simulación de solicitud de restablecimiento
    return of(true);
  }

  /**
   * Establecer usuario actual
   */
  private setCurrentUser(user: User): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  /**
   * Cargar usuario desde localStorage
   */
  private loadUserFromStorage(): void {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        this.currentUserSubject.next(user);
      } catch (error) {
        console.error('Error loading user from storage:', error);
        localStorage.removeItem('currentUser');
      }
    }
  }
} 