interface ItemListProps {
  children: React.ReactNode;
}

export function ItemList({ children }: ItemListProps) {
  return <div className="space-y-2">{children}</div>;
}