import type { HTMLAttributes } from "react";
/** 16px rounded surface. `hover` adds scale + shadow. */
export default function Card({ hover = false, className = "", ...rest }: HTMLAttributes<HTMLDivElement> & { hover?: boolean }) {
  return <div className={`rounded-card border border-black/10 bg-white ${hover ? "transition duration-300 hover:scale-[1.02] hover:shadow-xl" : ""} ${className}`} {...rest} />;
}
