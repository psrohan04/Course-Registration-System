import { GraduationCap, BookOpen, Users, Library, ClipboardList } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { routes } from '@/lib/routes';

export function HomePage() {
  const features = [
    {
      icon: BookOpen,
      title: 'Course Types',
      description: 'Manage different types of courses like Individual, Group, or Special.',
      path: routes.courseTypes,
    },
    {
      icon: Library,
      title: 'Courses',
      description: 'Create and manage courses such as Hindi, English, or Urdu.',
      path: routes.courses,
    },
    {
      icon: Users,
      title: 'Course Offerings',
      description: 'Combine course types and courses to create offerings.',
      path: routes.courseOfferings,
    },
    {
      icon: ClipboardList,
      title: 'Registrations',
      description: 'Manage student registrations for course offerings.',
      path: routes.registrations,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <GraduationCap className="w-16 h-16 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Course Management System</h1>
        <p className="text-lg text-muted-foreground">
          Efficiently manage your courses, course types, and student registrations
          all in one place.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map(({ icon: Icon, title, description, path }) => (
          <Card key={path} className="p-6">
            <Icon className="w-8 h-8 mb-4" />
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-muted-foreground mb-4">{description}</p>
            <Button asChild className="w-full">
              <Link to={path}>Manage {title}</Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}