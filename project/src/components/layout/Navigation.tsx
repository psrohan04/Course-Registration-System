import { Button } from '@/components/ui/button';
import { routes } from '@/lib/routes';
import { GraduationCap, BookOpen, Users, Library, ClipboardList } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { icon: BookOpen, label: 'Course Types', path: routes.courseTypes },
    { icon: Library, label: 'Courses', path: routes.courses },
    { icon: Users, label: 'Course Offerings', path: routes.courseOfferings },
    { icon: ClipboardList, label: 'Registrations', path: routes.registrations },
  ];

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Course Management System</h1>
        </div>
        
        <nav className="flex gap-2">
          {navItems.map(({ icon: Icon, label, path }) => (
            <Button
              key={path}
              variant={location.pathname === path ? 'default' : 'ghost'}
              asChild
            >
              <Link to={path}>
                <Icon className="w-4 h-4 mr-2" />
                {label}
              </Link>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}