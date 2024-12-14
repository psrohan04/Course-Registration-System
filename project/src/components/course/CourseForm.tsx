import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';

interface CourseFormProps {
  onSubmit: (name: string) => void;
}

export function CourseForm({ onSubmit }: CourseFormProps) {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (!name.trim()) {
      toast.error('Please enter a course name');
      return;
    }
    onSubmit(name.trim());
    setName('');
  };

  return (
    <div className="flex gap-2 mb-4">
      <Input
        placeholder="New course name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={handleSubmit}>
        <Plus className="w-4 h-4 mr-2" />
        Add
      </Button>
    </div>
  );
}