import { useStore } from '@/store';
import { DataCard } from '@/components/ui/data-card';
import { ItemList } from '@/components/ui/item-list';
import { CourseTypeForm } from '@/components/course-type/CourseTypeForm';
import { CourseTypeItem } from '@/components/course-type/CourseTypeItem';
import { toast } from 'sonner';

export function CourseTypeManager() {
  const { courseTypes, addCourseType, updateCourseType, deleteCourseType } = useStore();

  const handleAdd = (name: string) => {
    addCourseType({ id: crypto.randomUUID(), name });
    toast.success('Course type added successfully');
  };

  const handleUpdate = (id: string, name: string) => {
    updateCourseType(id, { name });
    toast.success('Course type updated successfully');
  };

  const handleDelete = (id: string) => {
    deleteCourseType(id);
    toast.success('Course type deleted successfully');
  };

  return (
    <DataCard title="Course Types">
      <CourseTypeForm onSubmit={handleAdd} />
      <ItemList>
        {courseTypes.map((type) => (
          <CourseTypeItem
            key={type.id}
            courseType={type}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ItemList>
    </DataCard>
  );
}