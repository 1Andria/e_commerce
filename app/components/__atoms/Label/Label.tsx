interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export default function Label({ children, ...props }: LabelProps) {
  return (
    <label {...props} className="block mb-1 font-semibold">
      {children}
    </label>
  );
}
