import React from "react";
import HeroText from "../../../components/sections/HeroText";
import Accordion from "../../../components/common/Accordion";

const documentItems = [
  {
    value: "doc-1",
    question: "Budgets and Financial Statements",
    answer:
      "You can submit documents via the student portal or in person at the registrar’s office.",
  },
  {
    value: "doc-2",
    question: "Council Meeting Agendas",
    answer:
      "PDF, DOCX, and JPG formats are accepted. Make sure your file is under 10MB.",
  },
  {
    value: "doc-3",
    question: "Council Meeting Miniutes",
    answer:
      "PDF, DOCX, and JPG formats are accepted. Make sure your file is under 10MB.",
  },
  {
    value: "doc-4",
    question: "Executive Meeting Agendas",
    answer:
      "PDF, DOCX, and JPG formats are accepted. Make sure your file is under 10MB.",
  },
  {
    value: "doc-5",
    question: "Executive Meeting Minutes",
    answer:
      "PDF, DOCX, and JPG formats are accepted. Make sure your file is under 10MB.",
  },
  {
    value: "doc-6",
    question: "ASSU Constitution",
    answer:
      "PDF, DOCX, and JPG formats are accepted. Make sure your file is under 10MB.",
  },
];

export default function Documents() {
  return (
    <>
      <HeroText text="Documents" />
      <Accordion items={documentItems} />
    </>
  );
}
