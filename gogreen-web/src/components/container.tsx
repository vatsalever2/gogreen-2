import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-10",
        size === "default" && "max-w-7xl",
        size === "wide" && "max-w-[1440px]",
        size === "narrow" && "max-w-4xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
