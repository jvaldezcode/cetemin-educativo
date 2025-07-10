export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: 'student' | 'teacher' | 'admin';
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt?: Date;
  profile?: {
    bio?: string;
    phone?: string;
    location?: string;
    website?: string;
  };
  preferences?: {
    language: string;
    theme: 'light' | 'dark';
    notifications: boolean;
  };
}

export interface UserProfile {
  id: string;
  userId: string;
  bio?: string;
  phone?: string;
  location?: string;
  website?: string;
  socialMedia?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface UserPreferences {
  id: string;
  userId: string;
  language: string;
  theme: 'light' | 'dark';
  notifications: boolean;
  emailNotifications: boolean;
  pushNotifications: boolean;
} 