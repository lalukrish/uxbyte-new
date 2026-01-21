"use client";
import Link from "next/link";
import cn from "@/lib/cn";

const sizes = {
  sm: "text-[0.875rem] px-4 py-2",
  md: "text-[0.95rem] px-6 py-2",
  lg: "text-[1.1rem] px-8 py-2",
};

export const Button = (
  {
    label,
    href,
    type = "button",
    variant = "filled",
    size = "md",
    iconLeft,
    iconRight,
    disabled = false,
    fullWidth = false,
    ariaLabel,
    className,
    onClick,
    color = "b",
  },
  ref,
) => {
  const baseStyles =
    "group inline-flex items-center justify-center gap-2 font-medium transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 min-h-[40px]";

  const variants = {
    filled: "bg-[#000000] text-white  focus-visible:outline-neutral-900",
    outlined:
      "border border-gray-500 text-[#00000] hover:bg-[#fff] hover:text-white focus-visible:outline-[#00000]",
    ghost:
      "text-neutral-900 hover:bg-neutral-100 focus-visible:outline-neutral-900",
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
    className,
  );

  const content = (
    <>
      {iconLeft && (
        <span
          className={cn(
            "transition-transform duration-200 ease-out motion-reduce:transform-none",
            !disabled && "group-hover:-translate-x-1",
          )}
        >
          {iconLeft}
        </span>
      )}

      <span>{label}</span>

      {iconRight && (
        <span
          className={cn(
            "transition-transform duration-200 ease-out motion-reduce:transform-none",
            !disabled && "group-hover:translate-x-1",
          )}
        >
          {iconRight}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        ref={ref}
        href={href}
        aria-label={ariaLabel || label}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        className={classes}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel || label}
      className={classes}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

Button.displayName = "Button";
