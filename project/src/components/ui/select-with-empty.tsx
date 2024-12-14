import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Option {
  id: string;
  name: string;
}

interface SelectWithEmptyProps {
  value: string;
  onValueChange: (value: string) => void;
  options: Option[];
  placeholder: string;
  className?: string;
  allowEmpty?: boolean;
  emptyLabel?: string;
}

export function SelectWithEmpty({
  value,
  onValueChange,
  options,
  placeholder,
  className,
  allowEmpty = false,
  emptyLabel = 'All',
}: SelectWithEmptyProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {allowEmpty && (
          <SelectItem value="_empty">{emptyLabel}</SelectItem>
        )}
        {options.map((option) => (
          <SelectItem key={option.id} value={option.id}>
            {option.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}