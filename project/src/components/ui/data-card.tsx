import { Card } from '@/components/ui/card';

interface DataCardProps {
  title: string;
  children: React.ReactNode;
}

export function DataCard({ title, children }: DataCardProps) {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </Card>
  );
}