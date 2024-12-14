import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SelectWithEmpty } from '@/components/ui/select-with-empty';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';
import { useStore } from '@/store';

interface CourseOfferingFormProps {
  onSubmit: (courseId: string, typeId: string) => void;
}

export function CourseOfferingForm({ onSubmit }: CourseOfferingFormProps) {
  const { courses, courseTypes } = useStore();
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [selectedTypeId, setSelectedTypeId] = useState('');

  const handleSubmit = () => {
    if (!selectedCourseId || !selectedTypeId) {
      toast.error('Please select both course and type');
      return;
    }
    onSubmit(selectedCourseId, selectedTypeId);
    setSelectedCourseId('');
    setSelectedTypeId('');
  };

  return (
    <div className="flex gap-2 mb-4">
      <SelectWithEmpty
        value={selectedCourseId}
        onValueChange={setSelectedCourseId}
        options={courses}
        placeholder="Select course"
        className="w-[200px]"
      />
      <SelectWithEmpty
        value={selectedTypeId}
        onValueChange={setSelectedTypeId}
        options={courseTypes}
        placeholder="Select type"
        className="w-[200px]"
      />
      <Button onClick={handleSubmit}>
        <Plus className="w-4 h-4 mr-2" />
        Add
      </Button>
    </div>
  );
}