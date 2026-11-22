"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";
import type { Faq } from "@/content/faqs";

/** Renders an FAQ answer: `{contact}` becomes a link, published bold phrases stay bold. */
function Answer({ faq }: { faq: Faq }) {
  const parts = faq.answer.split("{contact}");
  const emphasize = (text: string, key: string) => {
    if (!faq.emphasis?.length) return text;
    const pattern = new RegExp(
      `(${faq.emphasis.map((e) => `\\b${e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`).join("|")})`,
      "g",
    );
    return text.split(pattern).map((chunk, i) =>
      faq.emphasis!.includes(chunk) ? (
        <strong key={`${key}-${i}`} className="font-semibold text-ink">
          {chunk}
        </strong>
      ) : (
        chunk
      ),
    );
  };
  return (
    <p>
      {parts.map((part, i) => (
        <span key={i}>
          {emphasize(part, String(i))}
          {i < parts.length - 1 ? (
            <Link href="/contact" className="link-ink font-medium text-evergreen">
              contact us
            </Link>
          ) : null}
        </span>
      ))}
    </p>
  );
}

/**
 * FAQ disclosure list on Radix Accordion (correct ARIA and keyboard support).
 * Height animates with a grid-rows transition, so open/close stays interruptible.
 * Closed answers stay mounted for the transition but are `visibility: hidden`,
 * which keeps them out of the tab order and the accessibility tree.
 */
export function FaqList({ items, headingLevel = "h3" }: { items: Faq[]; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <AccordionPrimitive.Root type="multiple" className="border-t border-rule-strong/70">
      {items.map((faq) => (
        <AccordionPrimitive.Item key={faq.id} value={faq.id} id={faq.id} className="group/item border-b border-rule-strong/70">
          <AccordionPrimitive.Header asChild>
            <Heading className="font-sans">
              <AccordionPrimitive.Trigger className="group/trigger flex w-full items-center justify-between gap-6 py-5 text-left font-serif text-[1.1875rem] leading-snug font-medium text-ink transition-colors hover:text-evergreen sm:text-[1.3125rem]">
                {faq.question}
                <span
                  aria-hidden
                  className="grid size-9 shrink-0 place-items-center rounded-full border border-rule-strong text-evergreen transition-[transform,background-color,border-color] duration-300 ease-[var(--ease-out-expo)] group-hover/trigger:border-evergreen group-data-[state=open]/trigger:rotate-45 group-data-[state=open]/trigger:border-evergreen group-data-[state=open]/trigger:bg-evergreen group-data-[state=open]/trigger:text-paper"
                >
                  <Plus className="size-4" />
                </span>
              </AccordionPrimitive.Trigger>
            </Heading>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content
            forceMount
            className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-250 ease-[var(--ease-smooth-out)] data-[state=open]:grid-rows-[1fr] motion-reduce:transition-none [&[hidden]]:grid"
          >
            <div className="min-h-0 overflow-hidden">
              <div className="invisible max-w-[62ch] pr-12 pb-6 text-[1.0625rem] leading-relaxed text-ink-soft opacity-0 transition-[opacity,visibility] duration-200 group-data-[state=open]/item:visible group-data-[state=open]/item:opacity-100 group-data-[state=open]/item:delay-75">
                <Answer faq={faq} />
              </div>
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
