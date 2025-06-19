import Label from "../../__atoms/Label/Label";
import Input from "../../__atoms/Input/Input";

interface FormFieldProps {
  label: string;
  id: string;
  type?: string;
  value: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormField({
  label,
  id,
  type = "text",
  value,
  onChange,
  className = "",
}: FormFieldProps) {
  return (
    <div className="mb-4">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} value={value} onChange={onChange} required />
    </div>
  );
}
