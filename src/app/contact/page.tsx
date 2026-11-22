import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageOpener } from "@/components/page-opener";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Questions about KeenKids programs, pricing or hosting at your school? Email keenkidsinfo@gmail.com or send a message. KeenKids usually replies within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageOpener title="We’d love to hear from you">
        <p>
          Questions about a program, pricing or hosting KeenKids at your school? Write to us. We usually reply
          within one business day.
        </p>
      </PageOpener>

      <section aria-label="Contact" className="pb-[var(--section-y)]">
        <div className="shell grid gap-x-12 gap-y-12 lg:grid-cols-12">
          <div className="paper rounded-[6px] p-6 shadow-card ring-1 ring-ink/5 sm:p-10 lg:col-span-7">
            <h2 className="t-heading text-ink">Send a message</h2>
            <p className="mt-2 mb-8 text-ink-soft">
              This writes the email for you in your own mail app, addressed to the KeenKids team.
            </p>
            <ContactForm />
          </div>

          <aside className="space-y-10 lg:col-span-4 lg:col-start-9">
            <div>
              <h2 className="t-subheading text-ink">Email</h2>
              <a href={`mailto:${site.email}`} className="link-ink mt-2 inline-block text-[1.125rem] text-evergreen">
                {site.email}
              </a>
            </div>
            <div>
              <h2 className="t-subheading text-ink">Instagram</h2>
              <a href={site.instagram.url} className="link-ink mt-2 inline-flex items-center gap-1 text-[1.125rem] text-evergreen">
                {site.instagram.handle}
                <ArrowUpRight aria-hidden className="size-4" />
              </a>
              <p className="mt-1 text-ink-soft">Project photos and news from the classroom.</p>
            </div>
            <div>
              <h2 className="t-subheading text-ink">Already enrolled?</h2>
              <p className="mt-2 text-ink-soft">
                Follow the weekly curriculum and your child&rsquo;s progress in the{" "}
                <a href={site.parentPortal} className="link-ink text-evergreen">
                  Parent Portal
                </a>
                .
              </p>
            </div>
            <p className="border-t pt-6 text-[0.9375rem] text-ink-faint">
              KeenKids is based in {site.location}. Programs run on school campuses, so email is the best way to
              reach the team.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
