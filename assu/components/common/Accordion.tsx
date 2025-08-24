import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

export interface AccordionItemData {
  value: string;
  question: string;
  answer: string;
}

export default function CustomAccordion({
  items,
}: {
  items: AccordionItemData[];
}) {
  return (
    <Accordion type="single" collapsible>
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent className="whitespace-pre-line pt-2 text-sm text-[var(--color-subtitle)]">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
