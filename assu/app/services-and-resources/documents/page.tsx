import React from "react";
import HeroText from "../../../components/sections/HeroText";
import Accordion from "../../../components/common/Accordion";
import {
  fetchDocumentsData,
  groupDocumentsByType,
  Document,
} from "../../../lib/documents";

// Define the 6 categories we want to maintain
const DOCUMENT_CATEGORIES = [
  "Budgets and Financial Statements",
  "Council Meeting Agendas",
  "Council Meeting Minutes",
  "Executive Meeting Agendas",
  "Executive Meeting Minutes",
  "ASSU Constitution",
];

// Function to render document links for a category
function renderDocumentLinks(documents: Document[]): React.ReactNode {
  if (documents.length === 0) {
    return "No documents available at this time.";
  }

  return (
    <div className="space-y-2">
      {documents.map((doc, index) => (
        <div key={index}>
          <a
            href={doc.link}
            className="text-pink underline hover:text-pink-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            {doc.documentName}
          </a>
        </div>
      ))}
    </div>
  );
}

// Function to create accordion items from documents data
function createDocumentItems(documents: Document[]) {
  const groupedDocuments = groupDocumentsByType(documents);

  return DOCUMENT_CATEGORIES.map((category, index) => {
    const categoryDocuments = groupedDocuments[category] || [];

    return {
      value: `doc-${index + 1}`,
      question: category,
      answer: renderDocumentLinks(categoryDocuments),
    };
  });
}

export async function generateStaticParams() {
  try {
    const documents = await fetchDocumentsData();
    console.log(`Fetched ${documents.length} documents at build time`);
    return [{}];
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [{}];
  }
}

export default async function Documents() {
  // Fetch documents data at build time
  const documents = await fetchDocumentsData();
  const documentItems = createDocumentItems(documents);

  return (
    <>
      <HeroText text="Documents" />
      <Accordion items={documentItems} />
    </>
  );
}
