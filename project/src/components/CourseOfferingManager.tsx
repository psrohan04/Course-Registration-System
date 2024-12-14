import { useStore } from '@/store';
import { DataCard } from '@/components/ui/data-card';
import { ItemList } from '@/components/ui/item-list';
import { CourseOfferingForm } from '@/components/course-offering/CourseOfferingForm';
import { CourseOfferingItem } from '@/components/course-offering/CourseOfferingItem';
import { toast } from 'sonner';

export function CourseOfferingManager() {
  const { courses, courseTypes, courseOfferings, addCourseOffering, deleteCourseOffering } = useStore();

  const handleAdd = (courseId: string, typeId: string) => {
    const course = courses.find((c) => c.id === courseId);
    const type = courseTypes.find((t) => t.id === typeId);
    
    if (!course || !type) return;

    const name = `${type.name} - ${course.name}`;
    
    addCourseOffering({
      id: crypto.randomUUID(),
      courseId,
      courseTypeId: typeId,
      name,
    });
    
    toast.success('Course offering added successfully');
  };

  const handleDelete = (id: string) => {
    deleteCourseOffering(id);
    toast.success('Course offering deleted successfully');
  };

  return (
    <DataCard title="Course Offerings">
      <CourseOfferingForm onSubmit={handleAdd} />
      <ItemList>
        {courseOfferings.map((offering) => (
          <CourseOfferingItem
            key={offering.id}
            offering={offering}
            onDelete={handleDelete}
          />
        ))}
      </ItemList>
    </DataCard>
  );
}