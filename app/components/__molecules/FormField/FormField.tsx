import { forwardRef } from "react";
import Label from "../../__atoms/Label/Label";
import Input from "../../__atoms/Input/Input";
import { FormFieldProps } from "@/app/common/types/types";

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, id, type = "text", ...rest }, ref) => (
    <div className="mb-4">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} ref={ref} {...rest} />
    </div>
  )
);

FormField.displayName = "FormField";
export default FormField;
