import { Chapters } from "@/components/home/chapters";
import { Closing } from "@/components/home/closing";
import { Hero } from "@/components/home/hero";
import { IdeaJourney } from "@/components/home/idea-journey";
import { Making } from "@/components/home/making";
import { People } from "@/components/home/people";
import { TuitionGlance } from "@/components/home/tuition-glance";
import { Voices } from "@/components/home/voices";
import { SchoolFinder } from "@/components/school-finder";
import { JsonLd, organizationJsonLd } from "@/lib/structured-data";

/**
 * The homepage as nine scenes, one idea each:
 * cover → find your school → they make real things → how an idea grows →
 * the year in chapters → the people → parents' words → what it costs → back cover.
 */
export default function Home() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <Hero />
      <SchoolFinder variant="home" />
      <Making />
      <IdeaJourney />
      <Chapters />
      <People />
      <Voices />
      <TuitionGlance />
      <Closing />
    </>
  );
}
