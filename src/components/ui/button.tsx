import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { Slot } from "radix-ui"

/**
 * KeenKids buttons. Press feedback is a 3% scale-down (transform only);
 * a trailing arrow (data-icon="arrow") nudges right on hover.
 */
const buttonVariants = cva(
  [
    "group/button relative inline-flex shrink-0 items-center justify-center gap-2 rounded-[6px] border font-sans font-semibold whitespace-nowrap select-none",
    "transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out",
    "active:scale-[0.97] active:duration-100",
    "disabled:pointer-events-none disabled:opacity-50 aria-busy:cursor-progress",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-[1.1em]",
    "[&_[data-icon=arrow]]:transition-transform [&_[data-icon=arrow]]:duration-200 [&_[data-icon=arrow]]:ease-out hover:[&_[data-icon=arrow]]:translate-x-[3px]",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "border-evergreen bg-evergreen text-paper shadow-[0_1px_0_rgb(255_255_255/0.08)_inset,0_6px_16px_-10px_rgb(27_52_41/0.7)] hover:border-evergreen-soft hover:bg-evergreen-soft",
        cloth:
          "border-paper bg-paper text-evergreen-deep shadow-[0_8px_20px_-12px_rgb(0_0_0/0.55)] hover:border-gold-soft hover:bg-[#fff6e3]",
        outline:
          "border-rule-strong bg-transparent text-ink hover:border-evergreen hover:bg-paper",
        "outline-cloth":
          "border-paper/35 bg-transparent text-paper hover:border-paper/70 hover:bg-white/[0.06]",
        ghost: "border-transparent bg-transparent text-ink hover:bg-parchment-deep",
        link: "h-auto border-transparent px-0 text-evergreen underline decoration-evergreen/35 underline-offset-[0.25em] hover:decoration-evergreen active:scale-100",
      },
      size: {
        default: "h-12 px-5 text-[1rem]",
        sm: "h-10 px-4 text-[0.9375rem]",
        lg: "h-14 px-6 text-[1.0625rem]",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
