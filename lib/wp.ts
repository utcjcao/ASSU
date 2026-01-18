import { wpPageBySlugUrl } from "@/info/links";

export interface WordPressPage {
  id: number;
  date: string;
  slug: string;
  status: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

export interface FetchJsonOptions {
  timeoutMs?: number;
  headers?: Record<string, string>;
  revalidateSeconds?: number;
}

export async function fetchJsonWithTimeout<T>(
  url: string,
  { timeoutMs = 10000, headers = {}, revalidateSeconds }: FetchJsonOptions = {}
): Promise<T> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  const response = await fetch(url, {
    signal: controller.signal,
    headers: {
      "User-Agent": "ASSU-Website/1.0",
      ...headers,
    },
    ...(revalidateSeconds
      ? { next: { revalidate: revalidateSeconds } }
      : {}),
  });

  clearTimeout(timeoutId);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function fetchWpPageBySlug(
  slug: string
): Promise<WordPressPage | null> {
  const data = await fetchJsonWithTimeout<WordPressPage[]>(
    wpPageBySlugUrl(slug),
    { revalidateSeconds: 86400 }
  );

  return data[0] ?? null;
}

export function requireServerOnly<T>(
  fnName: string,
  fallback: () => T
): T | undefined {
  if (typeof window === "undefined") return undefined;
  console.warn(`${fnName} should only be called on server side`);
  return fallback();
}
