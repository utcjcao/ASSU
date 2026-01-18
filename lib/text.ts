import * as cheerio from "cheerio";

export interface CleanTextOptions {
  preserveNewlines?: boolean;
}

export interface ExtractTextOptions extends CleanTextOptions {
  collapseBlankLines?: boolean;
}

const entityReplacements: Array<[RegExp, string]> = [
  [/&nbsp;/g, " "],
  [/&amp;/g, "&"],
  [/&lt;/g, "<"],
  [/&gt;/g, ">"],
  [/&quot;/g, '"'],
  [/&#039;/g, "'"],
  [/&#8217;/g, "'"],
  [/&#8211;/g, "-"],
  [/&#8212;/g, "--"],
  [/&apos;/g, "'"],
  [/&#038;/g, "&"],
];

export function cleanText(
  text: string,
  { preserveNewlines = false }: CleanTextOptions = {}
): string {
  let cleaned = text.trim().replace(/\r\n/g, "\n");

  if (preserveNewlines) {
    cleaned = cleaned.replace(/[ \t]+/g, " ").replace(/\n+/g, "\n");
  } else {
    cleaned = cleaned.replace(/\s+/g, " ");
  }

  for (const [pattern, replacement] of entityReplacements) {
    cleaned = cleaned.replace(pattern, replacement);
  }

  return cleaned;
}

export function extractTextFromHtml(
  html: string,
  { preserveNewlines = false, collapseBlankLines = false }: ExtractTextOptions = {}
): string {
  const $ = cheerio.load(html);
  $("script, style").remove();

  let text = $("body").text() || $.text();
  text = cleanText(text, { preserveNewlines });

  if (collapseBlankLines && preserveNewlines) {
    text = text.replace(/\n\s*\n\s*\n/g, "\n\n");
  }

  return text.trim();
}
