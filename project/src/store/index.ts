import { create } from 'zustand';
import { CourseType, Course, CourseOffering, Registration } from '@/types';

interface Store {
  courseTypes: CourseType[];
  courses: Course[];
  courseOfferings: CourseOffering[];
  registrations: Registration[];
  
  addCourseType: (courseType: CourseType) => void;
  updateCourseType: (id: string, courseType: Partial<CourseType>) => void;
  deleteCourseType: (id: string) => void;
  
  addCourse: (course: Course) => void;
  updateCourse: (id: string, course: Partial<Course>) => void;
  deleteCourse: (id: string) => void;
  
  addCourseOffering: (courseOffering: CourseOffering) => void;
  updateCourseOffering: (id: string, courseOffering: Partial<CourseOffering>) => void;
  deleteCourseOffering: (id: string) => void;
  
  addRegistration: (registration: Registration) => void;
  deleteRegistration: (id: string) => void;
}

export const useStore = create<Store>((set) => ({
  courseTypes: [],
  courses: [],
  courseOfferings: [],
  registrations: [],
  
  addCourseType: (courseType) =>
    set((state) => ({ courseTypes: [...state.courseTypes, courseType] })),
  updateCourseType: (id, courseType) =>
    set((state) => ({
      courseTypes: state.courseTypes.map((ct) =>
        ct.id === id ? { ...ct, ...courseType } : ct
      ),
    })),
  deleteCourseType: (id) =>
    set((state) => ({
      courseTypes: state.courseTypes.filter((ct) => ct.id !== id),
    })),
  
  addCourse: (course) =>
    set((state) => ({ courses: [...state.courses, course] })),
  updateCourse: (id, course) =>
    set((state) => ({
      courses: state.courses.map((c) =>
        c.id === id ? { ...c, ...course } : c
      ),
    })),
  deleteCourse: (id) =>
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== id),
    })),
  
  addCourseOffering: (courseOffering) =>
    set((state) => ({
      courseOfferings: [...state.courseOfferings, courseOffering],
    })),
  updateCourseOffering: (id, courseOffering) =>
    set((state) => ({
      courseOfferings: state.courseOfferings.map((co) =>
        co.id === id ? { ...co, ...courseOffering } : co
      ),
    })),
  deleteCourseOffering: (id) =>
    set((state) => ({
      courseOfferings: state.courseOfferings.filter((co) => co.id !== id),
    })),
  
  addRegistration: (registration) =>
    set((state) => ({
      registrations: [...state.registrations, registration],
    })),
  deleteRegistration: (id) =>
    set((state) => ({
      registrations: state.registrations.filter((r) => r.id !== id),
    })),
}));