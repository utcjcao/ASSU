import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

export default function StyledAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-2xl mx-auto rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-[var(--color-fill-base-1)] shadow-sm"
    >
      <AccordionItem
        value="item-1"
        className="border-b border-[var(--color-line)] px-6 hover:bg-[var(--color-fill-base-1)] transition-colors"
      >
        <AccordionTrigger className="text-[var(--color-title)] font-[var(--font-body-medium)] py-5 hover:no-underline">
          Where do I go to get an official UofT Transcript?
        </AccordionTrigger>
        <AccordionContent className="text-[var(--color-subtitle)] font-[var(--font-body-small)] pb-5">
          Transcripts can be ordered online via Acorn or from the UofT
          transcript centre, located at Enrolment Services. 172 St. George St.
          Toronto ON M5R 0A3. For inquiries call: 416-978-2190.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="item-2"
        className="border-b border-[var(--color-line)] px-6 hover:bg-[var(--color-fill-base-1)] transition-colors"
      >
        <AccordionTrigger className="text-[var(--color-title)] font-[var(--font-body-medium)] py-5 hover:no-underline">
          Where can I find final exams?
        </AccordionTrigger>
        <AccordionContent className="text-[var(--color-subtitle)] font-[var(--font-body-small)] pb-5">
          Final exams are typically available through your course portal or
          department website.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="item-3"
        className="border-b border-[var(--color-line)] px-6 hover:bg-[var(--color-fill-base-1)] transition-colors"
      >
        <AccordionTrigger className="text-[var(--color-title)] font-[var(--font-body-medium)] py-5 hover:no-underline">
          Where can I find term tests?
        </AccordionTrigger>
        <AccordionContent className="text-[var(--color-subtitle)] font-[var(--font-body-small)] pb-5">
          Term tests are usually distributed by instructors or posted on
          Quercus.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="item-4"
        className="px-6 hover:bg-[var(--color-fill-base-1)] transition-colors"
      >
        <AccordionTrigger className="text-[var(--color-title)] font-[var(--font-body-medium)] py-5 hover:no-underline">
          Where is the Lost and Found for Sidney Smith?
        </AccordionTrigger>
        <AccordionContent className="text-[var(--color-subtitle)] font-[var(--font-body-small)] pb-5">
          The Lost and Found is located at the front desk in Sidney Smith Hall.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
