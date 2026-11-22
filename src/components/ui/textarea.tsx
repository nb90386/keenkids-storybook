import * as React from "react"
import { cn } from "cn"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-36 w-full rounded-[6px] border border-input bg-paper px-3.5 py-3 text-[1rem] leading-relaxed text-ink transition-[border-color,box-shadow] outline-none hover:border-ink/40 placeholder:text-muted-foreground focus-visible:border-evergreen focus-visible:ring-3 focus-visible:ring-evergreen/15 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20  dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
