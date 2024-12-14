import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { useStore } from '@/store';
import { Registration } from '@/types';

interface RegistrationListProps {
  registrations: Registration[];
  onDelete: (id: string) => void;
}

export function RegistrationList({ registrations, onDelete }: RegistrationListProps) {
  const { courseOfferings } = useStore();

  return (
    <div className="space-y-2">
      {registrations.map((registration) => {
        const offering = courseOfferings.find(
          (co) => co.id === registration.courseOfferingId
        );

        return (
          <div
            key={registration.id}
            className="flex items-center justify-between p-3 bg-secondary rounded-lg"
          >
            <div>
              <span className="text-lg font-medium">
                {registration.studentName}
              </span>
              <span className="text-sm text-muted-foreground ml-2">
                {offering?.name}
              </span>
              <span className="text-sm text-muted-foreground ml-2">
                {new Date(registration.registrationDate).toLocaleDateString()}
              </span>
            </div>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => onDelete(registration.id)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        );
      })}
    </div>
  );
}