import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ItemCard } from '@/components/ui/item-card';
import { Pencil, Trash2 } from 'lucide-react';
import { Course } from '@/types';

interface CourseItemProps {
  course: Course;
  onUpdate: (id: string, name: string) => void;
  onDelete: (id: string) => void;
}

export function CourseItem({ course, onUpdate, onDelete }: CourseItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingName, setEditingName] = useState(course.name);

  const handleUpdate = () => {
    if (!editingName.trim()) return;
    onUpdate(course.id, editingName.trim());
    setIsEditing(false);
  };

  return (
    <ItemCard>
      {isEditing ? (
        <div className="flex gap-2 flex-1">
          <Input
            value={editingName}
            onChange={(e) => setEditingName(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleUpdate}>Save</Button>
          <Button
            variant="outline"
            onClick={() => {
              setIsEditing(false);
              setEditingName(course.name);
            }}
          >
            Cancel
          </Button>
        </div>
      ) : (
        <>
          <span className="text-lg">{course.name}</span>
          <div className="flex gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsEditing(true)}
            >
              <Pencil className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => onDelete(course.id)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </>
      )}
    </ItemCard>
  );
}