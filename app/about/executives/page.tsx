import React from "react";
import Text from "@/components/common/Text";
// import AssuImage from "@/components/common/AssuImage";
import Divider from "@/components/common/Divider";
import Link from "@/components/common/Link";
import Image from "next/image";
import { fetchExecutivesData, Executive } from "@/lib/executives";

export async function generateStaticParams() {
  try {
    const executives = await fetchExecutivesData();
    console.log(`Fetched ${executives.length} executives at build time`);
    return [{}];
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [{}];
  }
}

export default async function Executives() {
  // Fetch executives data at build time
  const executives = await fetchExecutivesData();
  return (
    <div className="min-h-screen bg-gray-lighter">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-16">
          <Divider className="mb-8" width="100%" maxWidth="100%" />

          <Text
            as="h1"
            className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4"
          >
            Our Team
          </Text>

          <Divider className="mb-6" width="100%" maxWidth="100%" />

          <Text
            as="p"
            className="text-xl md:text-2xl text-[var(--color-text-secondary)] mb-4"
          >
            Get to know your 2024-25 ASSU Executive Team.
          </Text>

          <div className="w-full h-px bg-black opacity-25"></div>
        </div>

        {/* Executives Section */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-black opacity-25 transform -translate-x-1/2"></div>

          <div className="space-y-16 md:space-y-24">
            {executives.map((executive, index) => (
              <div key={executive.name} className="bg-gray-lighter">
                <div className="relative">
                  <div
                    className={`grid gap-8 md:gap-12 items-start ${
                      executive.image ? "md:grid-cols-2" : "md:grid-cols-1"
                    }`}
                  >
                    {/* Image Section - Alternating sides */}
                    {executive.image && (
                      <div
                        className={`order-2 ${
                          index % 2 === 0 ? "md:order-1" : "md:order-2"
                        }`}
                      >
                        <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
                          <Image
                            src={executive.image}
                            alt={`${executive.name} - ${executive.title}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    )}

                    {/* Content Section - Alternating sides */}
                    <div
                      className={`order-1 ${
                        executive.image
                          ? index % 2 === 0
                            ? "md:order-2"
                            : "md:order-1"
                          : ""
                      }`}
                    >
                      <div className="space-y-6 flex flex-col justify-end h-full">
                        <div>
                          <Text
                            as="h2"
                            className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-2"
                          >
                            {executive.name}
                          </Text>
                          <Text
                            as="h3"
                            className="text-xl md:text-2xl text-[var(--color-text-primary)]"
                          >
                            {executive.title}
                          </Text>
                        </div>

                        {/* Bio */}
                        <div>
                          <Text
                            as="p"
                            className="text-[var(--color-text-secondary)] leading-relaxed text-base md:text-lg whitespace-pre-line"
                          >
                            {executive.bio}
                          </Text>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                          <Link href={`mailto:${executive.email}`}>
                            <span className="inline-flex items-center gap-2">
                              <span>📧</span>
                              <span>{executive.email}</span>
                            </span>
                          </Link>

                          {executive.linkedin && (
                            <Link href={`https://${executive.linkedin}`}>
                              <span className="inline-flex items-center gap-2">
                                <span>❤️</span>
                                <span>{executive.linkedin}</span>
                              </span>
                            </Link>
                          )}

                          {executive.instagram && (
                            <Link
                              href={`https://instagram.com/${executive.instagram.replace(
                                "@",
                                ""
                              )}`}
                            >
                              <span className="inline-flex items-center gap-2">
                                <span>❤️</span>
                                <span>{executive.instagram}</span>
                              </span>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Horizontal line below each executive section  */}
                  {index < executives.length - 1 && (
                    <div className="flex justify-between mt-8 gap-8 md:gap-12">
                      <div className="w-[calc(50%-1rem)] md:w-[calc(50%-1.5rem)] h-px bg-black opacity-25"></div>
                      <div className="w-[calc(50%-1rem)] md:w-[calc(50%-1.5rem)] h-px bg-black opacity-25"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="max-w-6xl mx-auto px-4 -mt-8">
        <Divider width="100%" maxWidth="100%" />
      </div>
    </div>
  );
}
