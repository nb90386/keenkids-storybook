"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { paymentsLive } from "@/content/site";
import { cn } from "@/lib/utils";

type Props = { url: string; label: string; planLabel: string; className?: string };

/**
 * Pays monthly tuition through the existing Stripe Payment Link.
 * In the design preview (NEXT_PUBLIC_PAYMENTS_LIVE unset) it explains where it
 * leads instead, so nobody reaches live checkout by accident during review.
 */
export function PaymentButton({ url, label, planLabel, className }: Props) {
  const [copied, setCopied] = useState(false);

  if (paymentsLive) {
    return (
      <Button asChild variant="outline" size="sm" className={className}>
        <a href={url} rel="noopener noreferrer">
          {label}
          <ArrowUpRight data-icon="arrow" aria-hidden />
        </a>
      </Button>
    );
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className={cn(className)}>
          {label}
          <ArrowUpRight data-icon="arrow" aria-hidden />
        </Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false} className="gap-0">
        <DialogTitle className="t-heading text-ink">Payments are off in this preview</DialogTitle>
        <DialogDescription className="mt-3 text-[1rem] leading-relaxed text-ink-soft">
          On the live site, this button opens KeenKids&rsquo; existing Stripe checkout for the{" "}
          <strong className="font-semibold text-ink">{planLabel}</strong> plan. It&rsquo;s switched off here so
          nobody is charged while the team reviews the design.
        </DialogDescription>
        <div className="mt-5 rounded-[5px] border bg-parchment px-3.5 py-3">
          <p className="t-label text-ink-faint">Stripe Payment Link</p>
          <p className="mt-1 font-mono text-[0.8125rem] break-all text-ink">{url}</p>
        </div>
        <div className="mt-6 flex flex-wrap justify-end gap-2">
          <Button variant="ghost" size="sm" onClick={copy} aria-live="polite">
            {copied ? <Check aria-hidden /> : <Copy aria-hidden />}
            {copied ? "Copied" : "Copy link"}
          </Button>
          <DialogClose asChild>
            <Button size="sm">Got it</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
