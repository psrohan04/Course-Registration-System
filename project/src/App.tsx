import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { Navigation } from '@/components/layout/Navigation';
import { HomePage } from '@/pages/HomePage';
import { CourseTypeManager } from '@/components/CourseTypeManager';
import { CourseManager } from '@/components/CourseManager';
import { CourseOfferingManager } from '@/components/CourseOfferingManager';
import { RegistrationManager } from '@/components/RegistrationManager';
import { routes } from '@/lib/routes';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path={routes.home} element={<HomePage />} />
            <Route path={routes.courseTypes} element={<CourseTypeManager />} />
            <Route path={routes.courses} element={<CourseManager />} />
            <Route path={routes.courseOfferings} element={<CourseOfferingManager />} />
            <Route path={routes.registrations} element={<RegistrationManager />} />
            <Route path="*" element={<Navigate to={routes.home} replace />} />
          </Routes>
        </main>
        
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default  App;