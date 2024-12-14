interface ItemCardProps {
  children: React.ReactNode;
}

export function ItemCard({ children }: ItemCardProps) {
  return (
    <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
      {children}
    </div>
  );
}