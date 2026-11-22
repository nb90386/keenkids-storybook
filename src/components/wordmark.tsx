import { Logo } from "@/components/brand/logo";

/** Kept for existing imports; renders the V2 lockup on cloth. */
export function Wordmark({ className }: { className?: string }) {
  return <Logo tone="paper" className={className} />;
}
