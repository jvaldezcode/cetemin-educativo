export interface Course {
  id: string;
  title: string;
  description: string;
  slug: string;
  thumbnail?: string;
  banner?: string;
  instructorId: string;
  instructor?: {
    id: string;
    firstName: string;
    lastName: string;
    avatar?: string;
  };
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // en minutos
  lessonsCount: number;
  studentsCount: number;
  rating: number;
  price: number;
  isPublished: boolean;
  isFeatured: boolean;
  tags: string[];
  requirements: string[];
  learningObjectives: string[];
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
}

export interface CourseCategory {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  color?: string;
  coursesCount: number;
}

export interface CourseEnrollment {
  id: string;
  userId: string;
  courseId: string;
  enrolledAt: Date;
  completedAt?: Date;
  progress: number; // porcentaje de progreso (0-100)
  lastAccessedAt?: Date;
  isActive: boolean;
}

export interface CourseReview {
  id: string;
  userId: string;
  courseId: string;
  rating: number; // 1-5 estrellas
  comment?: string;
  createdAt: Date;
  updatedAt?: Date;
  user?: {
    firstName: string;
    lastName: string;
    avatar?: string;
  };
} 