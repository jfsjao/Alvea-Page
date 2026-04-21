import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

const variantClasses = {
  primary:
    "bg-[#1f7a45] text-white shadow-[0_18px_40px_rgba(31,122,69,0.24)] hover:bg-[#19653a] focus-visible:outline-[#1f7a45]",
  secondary:
    "border border-[#ccb89e] bg-white/75 text-[#2d2418] shadow-[0_14px_30px_rgba(74,53,25,0.10)] hover:bg-white focus-visible:outline-[#8d6d2c]",
  light:
    "bg-white text-[#231b13] shadow-[0_18px_40px_rgba(0,0,0,0.18)] hover:bg-[#fff7ef] focus-visible:outline-white",
} as const;

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold tracking-[0.02em] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantClasses[variant]} ${className}`}
    >
      <span
        aria-hidden="true"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/16"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19.25 14.79c-.31-.15-1.82-.89-2.1-.99-.28-.1-.49-.15-.69.15-.2.31-.79.99-.96 1.19-.18.2-.36.23-.67.08-.31-.15-1.31-.48-2.49-1.54-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.13-.64.13-.13.31-.36.46-.54.15-.18.2-.31.31-.51.1-.2.05-.38-.03-.54-.08-.15-.69-1.66-.95-2.27-.25-.59-.5-.51-.69-.52l-.59-.01c-.2 0-.51.08-.77.38-.26.31-1.01.99-1.01 2.41s1.03 2.8 1.18 2.99c.15.2 2.02 3.08 4.89 4.31.68.29 1.21.46 1.62.59.68.22 1.29.19 1.77.11.54-.08 1.82-.74 2.08-1.46.26-.72.26-1.33.18-1.46-.08-.13-.28-.2-.59-.36Z" />
          <path d="M20 12a8 8 0 0 1-11.72 7.07L4 20l1-4.05A8 8 0 1 1 20 12Z" />
        </svg>
      </span>
      <span>{children}</span>
    </a>
  );
}

