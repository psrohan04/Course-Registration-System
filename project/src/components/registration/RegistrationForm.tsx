import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SelectWithEmpty } from '@/components/ui/select-with-empty';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';
import { useStore } from '@/store';
import { CourseOffering } from '@/types';

interface RegistrationFormProps {
  onSubmit: (offering: string, name: string) => void;
}

export function RegistrationForm({ onSubmit }: RegistrationFormProps) {
  const { courseTypes, courseOfferings } = useStore();
  const [selectedTypeId, setSelectedTypeId] = useState('_empty');
  const [selectedOfferingId, setSelectedOfferingId] = useState('');
  const [studentName, setStudentName] = useState('');

  const filteredOfferings = selectedTypeId === '_empty'
    ? courseOfferings
    : courseOfferings.filter((co) => co.courseTypeId === selectedTypeId);

  const handleSubmit = () => {
    if (!selectedOfferingId || !studentName.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    onSubmit(selectedOfferingId, studentName.trim());
    setSelectedOfferingId('');
    setStudentName('');
  };

  return (
    <div className="flex gap-2 mb-4">
      <SelectWithEmpty
        value={selectedTypeId}
        onValueChange={setSelectedTypeId}
        options={courseTypes}
        placeholder="Filter by type"
        className="w-[200px]"
        allowEmpty
      />
      <SelectWithEmpty
        value={selectedOfferingId}
        onValueChange={setSelectedOfferingId}
        options={filteredOfferings}
        placeholder="Select course offering"
        className="w-[300px]"
      />
      <Input
        placeholder="Student name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        className="flex-1"
      />
      <Button onClick={handleSubmit}>
        <Plus className="w-4 h-4 mr-2" />
        Register
      </Button>
    </div>
  );
}