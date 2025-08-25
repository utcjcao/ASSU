"use client";

import React from "react";
import ContentGrid, { ContentItem } from "@/components/layout/ContentGrid";
import Divider from "@/components/common/Divider";
import Link from "@/components/common/Link";
// import AssuImage from "@/components/common/AssuImage";

// Grid items for the Grants page
const items: ContentItem[] = [
  {
    id: "travel-grant",
    title: "ASSU Travel Grant",
    // node: (
    //       <AssuImage
    //         src="/svg/abs-shape.svg"
    //         alt=""
    //       />
    //     ),
  },
  {
    id: "travel-grant-desc",
    title: "",
    description:
      "This grant was created to financially assist full‑time undergraduate Arts & Science students presenting their own research at academic conferences. Grants are strictly for the costs of travel (e.g., airfare, train fare). The amount of a single grant is up to 40% of your ticket to a max of $250, regardless of conference location or estimated expenses.",
    node: (
      <Link href="/awards-and-grants/grants/travel-grant-application">
        2024 Travel Grant Application
      </Link>
    ),
  },
  {
    id: "deferred-exam-fee-1",
    title: "Deferred Exam Fee Grant",
    // node: (
    //       <AssuImage
    //         src="/svg/droplet.svg"
    //         alt=""
    //       />
    //     ),
  },
  {
    id: "deferred-exam-fee-1-desc",
    title: "",
    description:
      "This grant was created to financially assist full‑time undergraduate Arts & Science students with the costs of deferred exam fees in a situation where they need to postpone their final exam due to physical or mental illness. The amount of the grant is up to $120 which can only be applied to the fee associated with a deferred exam, regardless of additional circumstances.",
    node: (
      <Link href="/awards-and-grants/grants/deferred-exam-fee-application">
        Deferred Exam Fee Grant Application
      </Link>
    ),
  },
  {
    id: "donation-requests",
    title: "Donation Requests",
    // node: (
    //       <AssuImage
    //         src="/svg/heart.svg"
    //         alt=""
    //       />
    //     ),
  },
  {
    id: "donation-requests-desc",
    title: "",
    description:
      "All ASSU Members are eligible to submit requests for monetary donations from ASSU towards events and/or initiatives which enhance the undergraduate student experience. The primary contact must be an ASSU member for all donation requests. Eligibility does not guarantee approval; all requests are subject to review and approval by the ASSU Executive.",
    node: (
      <Link href="/awards-and-grants/grants/donation-request-form">
        ASSU Donation Request Form
      </Link>
    ),
  },
];

export default function GrantsPage() {
  return (
    <div className="min-h-screen bg-gray-lighter" aria-labelledby="page-title">
      <main className="max-w-5xl mx-auto px-6 py-12">
        <Divider />
        <h1 id="page-title" className="text-4xl font-bold mb-8">
          ASSU Grants
        </h1>
        <Divider />

        {/* Top notice line under the heading */}
        <p className="mt-6 mb-8 text-base md:text-lg text-gray-700">
          All forms should be submitted to{" "}
          <Link href="/contact-us">ASSU office (Sid Smith Room 1068)</Link>, or
          email{" "}
          <Link href="mailto:students.assu@utoronto.ca">
            students.assu@utoronto.ca
          </Link>
          .
        </p>

        <Divider />

        {/* ContentGrid draws the thin separators between cells like the mock */}
        <ContentGrid
          items={items}
          columns={2}
          ariaLabel="ASSU grants grid"
          className="mt-2"
        />

        <Divider />
      </main>
    </div>
  );
}
