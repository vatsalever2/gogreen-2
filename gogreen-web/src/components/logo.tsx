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
      <div className="inline-flex items-center gap-2 sm:gap-2.5">
        <Image
          src="/images/logo-mark-removebg.png"
          alt=""
          width={120}
          height={120}
          priority
          aria-hidden
          className="h-8 w-auto sm:h-9 select-none"
          style={variant === "light" ? { filter: "brightness(0) invert(1)" } : undefined}
        />
        <Image
          src="/images/logo-text-removebg.png"
          alt="GoGreen Solutions"
          width={640}
          height={100}
          priority
          className="h-6 w-auto sm:h-7 select-none"
          style={variant === "light" ? { filter: "brightness(0) invert(1)" } : undefined}
        />
      </div>
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
      aria-hidden
      className={className}
    >
      <rect x="0" y="0" width={s} height={s} rx="0.5" fill={color} />
      <rect x={s + gap} y="0" width={s} height={s} rx="0.5" fill={color} />
      <rect x="0" y={s + gap} width={s} height={s} rx="0.5" fill={color} />
    </svg>
  );
}
