"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/Button";
import Text from "@/components/common/Text";
import Divider from "@/components/common/Divider";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <Divider />

      {/* Error Code */}
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

      <Text as="p" className="text-lg mb-8 max-w-md" color="secondary">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It
        might have been moved, deleted, or you entered the wrong URL.
      </Text>

      {/* Navigation Options */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Link href="/">
          <Button size="lg" className="min-w-[140px]">
            Go Home
          </Button>
        </Link>

        <Link href="/about">
          <Button
            size="lg"
            className="min-w-[140px] bg-gray-light hover:bg-gray text-gray-darker"
          >
            About ASSU
          </Button>
        </Link>
      </div>

      {/* Helpful Links */}
      <div className="w-full max-w-md">
        <Text as="h3" className="text-lg font-semibold mb-4" color="primary">
          You might be looking for:
        </Text>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          <Link
            href="/services-and-resources"
            className="p-3 rounded-lg border border-gray-light hover:border-pink hover:bg-pink-lighter transition-colors"
          >
            <Text as="span" className="text-sm font-medium" color="primary">
              Services & Resources
            </Text>
          </Link>

          <Link
            href="/events"
            className="p-3 rounded-lg border border-gray-light hover:border-pink hover:bg-pink-lighter transition-colors"
          >
            <Text as="span" className="text-sm font-medium" color="primary">
              Events
            </Text>
          </Link>

          <Link
            href="/course-unions"
            className="p-3 rounded-lg border border-gray-light hover:border-pink hover:bg-pink-lighter transition-colors"
          >
            <Text as="span" className="text-sm font-medium" color="primary">
              Course Unions
            </Text>
          </Link>

          <Link
            href="/contact-us"
            className="p-3 rounded-lg border border-gray-light hover:border-pink hover:bg-pink-lighter transition-colors"
          >
            <Text as="span" className="text-sm font-medium" color="primary">
              Contact Us
            </Text>
          </Link>
        </div>
      </div>

      <Divider className="top-7" />

      {/* Decorative Elements */}
      <div className="flex items-center justify-center space-x-4 mt-8 opacity-30">
        <Image
          src="/svg/star.svg"
          alt="Decorative star"
          width={20}
          height={20}
        />
        <Image
          src="/svg/circle.svg"
          alt="Decorative circle"
          width={16}
          height={16}
        />
        <Image
          src="/svg/triangle.svg"
          alt="Decorative triangle"
          width={18}
          height={18}
        />
      </div>
    </div>
  );
}
