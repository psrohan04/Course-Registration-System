import { useStore } from '@/store';
import { DataCard } from '@/components/ui/data-card';
import { ItemList } from '@/components/ui/item-list';
import { CourseForm } from '@/components/course/CourseForm';
import { CourseItem } from '@/components/course/CourseItem';
import { toast } from 'sonner';

export function CourseManager() {
  const { courses, addCourse, updateCourse, deleteCourse } = useStore();

  const handleAdd = (name: string) => {
    addCourse({ id: crypto.randomUUID(), name });
    toast.success('Course added successfully');
  };

  const handleUpdate = (id: string, name: string) => {
    updateCourse(id, { name });
    toast.success('Course updated successfully');
  };

  const handleDelete = (id: string) => {
    deleteCourse(id);
    toast.success('Course deleted successfully');
  };

  return (
    <DataCard title="Courses">
      <CourseForm onSubmit={handleAdd} />
      <ItemList>
        {courses.map((course) => (
          <CourseItem
            key={course.id}
            course={course}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ItemList>
    </DataCard>
  );
}