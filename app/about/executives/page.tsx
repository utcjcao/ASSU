import fs from "fs/promises";
import path from "path";
import Image from "next/image";
import Divider from "@/components/common/Divider";
import Text from "@/components/common/Text";
import HeroText from "@/components/sections/HeroText";

type ExecutiveRow = {
  name: string;
  image?: string;
  bio: string;
};

type Executive = {
  name: string;
  title?: string;
  image?: string;
  bio: string;
};

function parseCsvLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const next = line[i + 1];

    if (char === '"' && inQuotes && next === '"') {
      current += '"';
      i++; // skip escaped quote
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
      continue;
    }

    current += char;
  }

  result.push(current.trim());
  return result;
}

async function loadExecutives(): Promise<Executive[]> {
  const csvPath = path.join(process.cwd(), "info", "executives.csv");
  const content = await fs.readFile(csvPath, "utf-8");
  const lines = content.trim().split(/\r?\n/);

  const header = parseCsvLine(lines.shift() ?? "");
  const rows: ExecutiveRow[] = lines
    .map(parseCsvLine)
    .filter((cols) => cols.length >= 1)
    .map((cols) => {
      const row: Record<string, string> = {};
      header.forEach((key, idx) => {
        row[key] = cols[idx] ?? "";
      });
      return {
        name: row.name || "",
        image: row.image || undefined,
        bio: row.bio || "",
      };
    });

  return rows.map((row) => {
    const [namePart, ...titleParts] = row.name.split(",");
    const name = namePart?.trim() ?? "";
    const title = titleParts.join(",").trim() || undefined;

    return {
      name,
      title,
      image: row.image?.trim() || undefined,
      bio: row.bio?.trim() || "",
    };
  });
}

export default async function Executives() {
  const executives = await loadExecutives();

  return (
    <div className="">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <HeroText text="Our Team"></HeroText>

        <Text as="p">Get to know your 2024-25 ASSU Executive Team.</Text>
        <Divider />

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {executives.map((executive, index) => (
            <div
              key={`${executive.name}-${index}`}
              className="bg-white rounded-lg shadow-sm p-6 md:p-8 flex flex-col space-y-6"
            >
              <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-gray-200">
                {executive.image ? (
                  <Image
                    src={executive.image}
                    alt={`${executive.name}${
                      executive.title ? ` - ${executive.title}` : ""
                    }`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                    No image available
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <Text
                  as="h2"
                  className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]"
                >
                  {executive.name}
                </Text>
                {executive.title && (
                  <Text
                    as="h3"
                    className="text-xl md:text-2xl text-[var(--color-text-primary)]"
                  >
                    {executive.title}
                  </Text>
                )}
              </div>

              <Text
                as="p"
                className="text-[var(--color-text-secondary)] leading-relaxed text-base md:text-lg whitespace-pre-line"
              >
                {executive.bio}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <Divider />
    </div>
  );
}
