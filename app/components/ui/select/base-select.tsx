import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

type BaseSelectProps = {
  options: string[];
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  className?: string;
};

export function BaseSelect({
  options,
  placeholder = "Select...",
  value,
  onChange,
  className,
}: BaseSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((opt) => (
          <SelectItem key={opt} value={opt}>
            {opt}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
