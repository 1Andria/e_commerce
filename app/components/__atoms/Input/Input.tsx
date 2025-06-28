


import { forwardRef, InputHTMLAttributes } from "react";

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => {
    return <input ref={ref} {...props}   className="border rounded px-3 py-2 w-full focus:outline-none focus:ring"/>;
  }
);

Input.displayName = "Input";
export default Input;
