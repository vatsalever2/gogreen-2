import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  return (
    <Link
      href="/"
      aria-label="GoGreen Solutions, home"
      className={cn(
        "group inline-flex items-center transition-opacity hover:opacity-80",
        className,
      )}
    >
      <Image
        src="/images/new-logo.png"
        alt="GoGreen Solutions"
        width={1000}
        height={300}
        priority
        className="h-9 w-auto sm:h-10 select-none"
        style={variant === "light" ? { filter: "brightness(0) invert(1)" } : undefined}
      />
    </Link>
  );
}

/** Three-square solar mark from the brand. */
export function Mark({
  size = 24,
  color = "#1f5d34",
  className,
  gap = 4,
}: {
  size?: number;
  color?: string;
  className?: string;
  gap?: number;
}) {
  const s = (size - gap) / 2;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      className={className}
    >
      <rect x="0" y="0" width={s} height={s} rx="0.5" fill={color} />
      <rect x={s + gap} y="0" width={s} height={s} rx="0.5" fill={color} />
      <rect x="0" y={s + gap} width={s} height={s} rx="0.5" fill={color} />
    </svg>
  );
}
