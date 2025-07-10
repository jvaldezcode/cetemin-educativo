export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  description?: string;
  content: string;
  videoUrl?: string;
  duration: number; // en minutos
  order: number;
  isPublished: boolean;
  isFree: boolean;
  resources?: LessonResource[];
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
}

export interface LessonResource {
  id: string;
  lessonId: string;
  title: string;
  type: 'pdf' | 'video' | 'audio' | 'link' | 'file';
  url: string;
  size?: number; // en bytes
  duration?: number; // para videos/audio en segundos
  createdAt: Date;
}

export interface LessonProgress {
  id: string;
  userId: string;
  lessonId: string;
  courseId: string;
  isCompleted: boolean;
  watchedDuration: number; // en segundos
  completedAt?: Date;
  lastAccessedAt: Date;
}

export interface LessonComment {
  id: string;
  lessonId: string;
  userId: string;
  content: string;
  parentId?: string; // para respuestas anidadas
  createdAt: Date;
  updatedAt?: Date;
  user?: {
    firstName: string;
    lastName: string;
    avatar?: string;
  };
  replies?: LessonComment[];
}

export interface LessonNote {
  id: string;
  userId: string;
  lessonId: string;
  content: string;
  timestamp?: number; // para notas en videos
  createdAt: Date;
  updatedAt: Date;
} 