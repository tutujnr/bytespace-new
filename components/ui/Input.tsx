import { forwardRef, type InputHTMLAttributes } from "react";
interface Props extends InputHTMLAttributes<HTMLInputElement> { label?: string; error?: string }
/** Labelled input with inline error message. */
const Input = forwardRef<HTMLInputElement, Props>(({ label, error, id, className = "", ...rest }, ref) => (
  <div className="w-full">
    {label && <label htmlFor={id} className="mb-1.5 block font-medium">{label}</label>}
    <input ref={ref} id={id} aria-invalid={!!error} className={`w-full rounded-full border bg-white px-5 py-3 outline-none focus:ring-2 focus:ring-brand ${error ? "border-red-500" : "border-black/10"} ${className}`} {...rest} />
    {error && <p role="alert" className="mt-1 px-2 text-xs text-red-600">{error}</p>}
  </div>
));
Input.displayName = "Input";
export default Input;
