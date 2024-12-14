import { Card } from '@/components/ui/card';
import { useStore } from '@/store';
import { RegistrationForm } from './registration/RegistrationForm';
import { RegistrationList } from './registration/RegistrationList';
import { toast } from 'sonner';

export function RegistrationManager() {
  const { registrations, addRegistration, deleteRegistration } = useStore();

  const handleAdd = (courseOfferingId: string, studentName: string) => {
    addRegistration({
      id: crypto.randomUUID(),
      courseOfferingId,
      studentName,
      registrationDate: new Date().toISOString(),
    });
    toast.success('Registration added successfully');
  };

  const handleDelete = (id: string) => {
    deleteRegistration(id);
    toast.success('Registration deleted successfully');
  };

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Student Registrations</h2>
      <RegistrationForm onSubmit={handleAdd} />
      <RegistrationList
        registrations={registrations}
        onDelete={handleDelete}
      />
    </Card>
  );
}