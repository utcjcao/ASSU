// Import cheerio only on server side
import * as cheerio from "cheerio";
import { cleanText } from "@/lib/text";
import { fetchWpPageBySlug, requireServerOnly } from "@/lib/wp";
import { CONSTITUTION_DOCUMENTS, FALLBACK_DOCUMENTS } from "@/info/links";

// Define the data shape for documents
export interface Document {
  documentName: string;
  link: string;
  documentType: string;
}

// Function to determine document type based on content or link
function determineDocumentType(documentName: string, link: string): string {
  const name = documentName.toLowerCase();
  const url = link.toLowerCase();

  // Check for budgets and financial statements first
  if (
    name.includes("budget") ||
    name.includes("financial") ||
    name.includes("audit") ||
    url.includes("budget")
  ) {
    return "Budgets and Financial Statements";
  }

  // Check for AEM documents (Assu Executive Meeting)
  if (name.includes("aem") || url.includes("aem")) {
    if (name.includes("minute") || url.includes("minute")) {
      return "Executive Meeting Minutes";
    }
    return "Executive Meeting Agendas";
  }

  // Check for executive documents
  if (name.includes("executive") || url.includes("executive")) {
    if (name.includes("agenda") || url.includes("agenda")) {
      return "Executive Meeting Agendas";
    }
    if (name.includes("minute") || url.includes("minute")) {
      return "Executive Meeting Minutes";
    }
    return "Executive Meeting Agendas";
  }

  // Check for council documents
  if (name.includes("agenda") || url.includes("agenda")) {
    return "Council Meeting Agendas";
  }
  if (name.includes("minute") || url.includes("minute")) {
    return "Council Meeting Minutes";
  }

  // Check for constitution documents
  if (
    name.includes("constitution") ||
    name.includes("bylaw") ||
    url.includes("constitution") ||
    url.includes("bylaw") ||
    url.includes("ASSU-Constitution") ||
    url.includes("BYLAWS")
  ) {
    return "ASSU Constitution";
  }

  return "Other Documents";
}

// Function to clean and normalize URL
function cleanUrl(url: string): string {
  if (!url) return "";

  // Handle protocol-relative URLs (starting with //)
  if (url.startsWith("//")) {
    return `https:${url}`;
  }

  // Handle relative URLs that start with ../
  if (url.startsWith("../")) {
    // Remove the ../ and make it absolute
    const cleanPath = url.replace(/^\.\.\//, "");
    return `https://assu.ca/wp/about/${cleanPath}`;
  }

  // If it's a relative URL starting with /, make it absolute
  if (url.startsWith("/")) {
    return `https://assu.ca${url}`;
  }

  // If it doesn't have a protocol, add https
  if (!url.startsWith("http")) {
    return `https://${url}`;
  }

  return url;
}

// Main function to fetch and parse documents data
export async function fetchDocumentsData(): Promise<Document[]> {
  try {
    // Only run on server side
    const serverFallback = requireServerOnly(
      "fetchDocumentsData",
      getFallbackDocuments
    );
    if (serverFallback !== undefined) return serverFallback;

    console.log("Fetching documents data from WordPress API...");

    const page = await fetchWpPageBySlug("documents");
    console.log("WordPress API response received:", page ? 1 : 0, "pages found");

    if (!page) {
      console.warn("No documents page found");
      return getFallbackDocuments();
    }
    const content = page.content.rendered;

    if (!content) {
      console.warn("No content found in documents page");
      return getFallbackDocuments();
    }

    console.log("Parsing HTML content with Cheerio...");

    // Parse HTML content with Cheerio
    const $ = cheerio.load(content);
    const documents: Document[] = [];

    // Extract all links from the content
    $("a").each((index: number, element) => {
      const $element = $(element);
      const href = $element.attr("href");
      const text = $element.text();

      if (href && text) {
        const documentName = cleanText(text);
        const link = cleanUrl(href);
        const documentType = determineDocumentType(documentName, link);

        // Only include documents that have meaningful names and valid links
        if (documentName.length > 0 && link.length > 0) {
          documents.push({
            documentName,
            link,
            documentType,
          });
        }
      }
    });

    console.log("Found", documents.length, "document links");

    // Remove duplicates based on document name and link
    const uniqueDocuments = documents.filter(
      (doc, index, self) =>
        index ===
        self.findIndex(
          (d) => d.documentName === doc.documentName && d.link === doc.link
        )
    );

    console.log(
      "After deduplication:",
      uniqueDocuments.length,
      "unique documents"
    );

    // Ensure constitution documents are always included
    // Add constitution documents if they're not already present
    CONSTITUTION_DOCUMENTS.forEach((constitutionDoc) => {
      const exists = uniqueDocuments.some(
        (doc) =>
          doc.link === constitutionDoc.link ||
          doc.documentName === constitutionDoc.documentName
      );
      if (!exists) {
        uniqueDocuments.push(constitutionDoc);
      }
    });

    console.log(
      "After adding constitution documents:",
      uniqueDocuments.length,
      "total documents"
    );

    return uniqueDocuments;
  } catch (error) {
    console.error("Error fetching documents data:", error);
    return getFallbackDocuments();
  }
}

// Helper function to get fallback documents
function getFallbackDocuments(): Document[] {
  return FALLBACK_DOCUMENTS;
}

// Function to group documents by type for display
export function groupDocumentsByType(
  documents: Document[]
): Record<string, Document[]> {
  return documents.reduce((groups, document) => {
    const type = document.documentType;
    if (!groups[type]) {
      groups[type] = [];
    }
    groups[type].push(document);
    return groups;
  }, {} as Record<string, Document[]>);
}
