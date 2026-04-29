import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
};

const variantClasses = {
  primary:
    "bg-cyan-300 text-slate-950 hover:bg-cyan-200 shadow-[0_16px_34px_rgba(34,211,238,0.22)]",
  secondary:
    "border border-white/12 bg-white/6 text-slate-100 hover:border-cyan-200/30 hover:bg-white/10",
  ghost:
    "text-cyan-200 hover:bg-cyan-300/10 hover:text-cyan-100",
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export function ButtonLink({
  children,
  className = "",
  variant = "primary",
  size = "md",
  disabled = false,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      {...props}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : undefined}
      className={`inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${sizeClasses[size]} ${variantClasses[variant]} ${disabled ? "pointer-events-none opacity-50" : ""} ${className}`}
    >
      {children}
    </Link>
  );
}
