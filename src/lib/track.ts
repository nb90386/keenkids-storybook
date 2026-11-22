// Privacy-conscious conversion events. Nothing is sent anywhere yet: track() dispatches
// a DOM event (`keenkids:track`) that an approved analytics tool can listen for later.
// No personal data, no child data. See docs/v2/ANALYTICS_PLAN.md.

export type TrackEvent =
  | "school_selected"
  | "form_opened"
  | "contact_composed"
  | "program_viewed"
  | "chapter_selected";

export function track(event: TrackEvent, props: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("keenkids:track", { detail: { event, ...props } }));
}
