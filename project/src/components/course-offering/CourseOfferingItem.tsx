import { Button } from '@/components/ui/button';
import { ItemCard } from '@/components/ui/item-card';
import { Trash2 } from 'lucide-react';
import { CourseOffering } from '@/types';
import { useStore } from '@/store';

interface CourseOfferingItemProps {
  offering: CourseOffering;
  onDelete: (id: string) => void;
}

export function CourseOfferingItem({ offering, onDelete }: CourseOfferingItemProps) {
  const { courses, courseTypes } = useStore();
  const course = courses.find((c) => c.id === offering.courseId);
  const type = courseTypes.find((t) => t.id === offering.courseTypeId);

  return (
    <ItemCard>
      <span className="text-lg">
        {type?.name} - {course?.name}
      </span>
      <Button
        size="icon"
        variant="ghost"
        onClick={() => onDelete(offering.id)}
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    </ItemCard>
  );
}