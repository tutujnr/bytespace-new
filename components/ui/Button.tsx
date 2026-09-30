import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "black" | "lime" | "blue" | "white";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> { variant?: Variant; href?: string; children: ReactNode }

const styles: Record<Variant, string> = {
  black: "bg-ink text-white hover:bg-black/80",
  lime: "bg-lime text-ink hover:bg-lime2",
  blue: "bg-brand text-white hover:bg-brand2",
  white: "bg-white text-ink hover:bg-soft2",
};

/** Pill button. Renders a Next <Link> when `href` is passed, otherwise a <button>. */
export default function Button({ variant = "black", href, className = "", children, ...rest }: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${styles[variant]} ${className}`;
  return href ? <Link href={href} className={cls}>{children}</Link> : <button className={cls} {...rest}>{children}</button>;
}
