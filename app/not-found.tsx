"use client";

import Link from "next/link";
import Button from "@/components/common/Button";
import Text from "@/components/common/Text";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <Text
        as="h1"
        className="text-6xl md:text-8xl font-bold text-pink mb-4"
        color="pink"
      >
        404
      </Text>

      {/* Error Message */}
      <Text
        as="h2"
        className="text-2xl md:text-3xl font-semibold mb-4"
        color="primary"
      >
        Page Not Found
      </Text>

      <Text
        as="p"
        className="text-lg mb-8 max-w-md mx-auto"
        align="center"
        color="secondary"
      >
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might
        have been moved, deleted, or you entered the wrong URL.
      </Text>

      {/* Navigation Options */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Link href="/">
          <Button size="lg" className="min-w-[140px]">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
