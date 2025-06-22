import Label from "../../__atoms/Label/Label";
import Input from "../../__atoms/Input/Input";
import { FormFieldProps } from "@/app/common/types/types";

export default function FormField({
  label,
  id,
  type = "text",
  value,
  onChange,
}: FormFieldProps) {
  return (
    <div className="mb-4">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} value={value} onChange={onChange} required />
    </div>
  );
}
