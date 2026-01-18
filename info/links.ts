export const WP_BASE_URL = "https://assu.ca";
export const WP_API_BASE = `${WP_BASE_URL}/wp/wp-json/wp/v2`;

export function wpPostsCategoryUrl(categoryId: number): string {
  return `${WP_API_BASE}/posts?categories=${categoryId}`;
}

export function wpMediaUrl(mediaId: number): string {
  return `${WP_API_BASE}/media/${mediaId}`;
}

export function wpPageBySlugUrl(slug: string): string {
  return `${WP_API_BASE}/pages?slug=${encodeURIComponent(slug)}`;
}

export const CONSTITUTION_DOCUMENTS = [
  {
    documentName: "ASSU Constitution and Bylaws 2024",
    link: "https://assu.ca/wp/wp-content/uploads/2024/04/ASSU-Constitution-Bylaws-2024.pdf",
    documentType: "ASSU Constitution",
  },
  {
    documentName: "ASSU Bylaws 2016",
    link: "https://assu.ca/wp/wp-content/uploads/2008/12/BYLAWS.2016.pdf",
    documentType: "ASSU Constitution",
  },
];

export const FALLBACK_DOCUMENTS = [
  {
    documentName: "Summer Budget 2025",
    link: "https://assu.ca/wp/wp-content/uploads/2025/05/Summer-Budget-2025.pdf",
    documentType: "Budgets and Financial Statements",
  },
  {
    documentName: "Financial Statement April 30th 2025",
    link: "https://assu.ca/wp/wp-content/uploads/2025/05/Financial-Statement-FINAL.pdf",
    documentType: "Budgets and Financial Statements",
  },
  ...CONSTITUTION_DOCUMENTS,
];
