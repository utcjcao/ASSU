import fs from "fs/promises";
import path from "path";
import Text from "@/components/common/Text";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import HeroText from "@/components/sections/HeroText";

type CourseUnion = {
  name: string;
  link: string;
};

async function loadCourseUnions(): Promise<CourseUnion[]> {
  const csvPath = path.join(process.cwd(), "unions", "unions.csv");
  const content = await fs.readFile(csvPath, "utf-8");

  return content
    .trim()
    .split(/\r?\n/)
    .slice(1) // drop header
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const match = line.match(/^(.*?),(.*)$/);
      if (!match) {
        return null;
      }
      const [, name, link] = match;
      return { name: name.trim(), link: link.trim() };
    })
    .filter(Boolean) as CourseUnion[];
}

export default async function CourseUnionsPage() {
  const unions = await loadCourseUnions();

  return (
    <main className="min-h-screen bg-gray-lighter" aria-labelledby="page-title">
      <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <HeroText text="Course Unions" />
        <Text
          as="p"
          className="text-base md:text-xl lg:text-2xl text-[var(--color-text-primary)] mb-4"
        >
          Course Unions are the core of the Arts and Science Students&apos;
          Union. From A to Z, Anthropology to Women & Gender Studies, these
          academic unions represent the students in disciplines within the
          Faculty of Arts and Science and by taking any course you are
          automatically a part of them.
          <br />
          <br />
          We have nearly 55 active Course Unions offering several academic and
          social services for their members. While each Course Union is unique,
          both in vision and in form, all share the common goals of meeting
          students&apos; needs and representing students&apos; views.
        </Text>
        <section aria-label="Course unions list" className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {unions.map((union, index) => (
              <AccordionItem
                key={`${union.name}-${index}`}
                value={`${union.name}-${index}`}
              >
                <AccordionTrigger>
                  <span className="flex-1 text-left">{union.name}</span>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <a
                    href={union.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-pink underline break-words"
                  >
                    {union.link}
                  </a>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </main>
  );
}
