"use client";

import React from "react";
import ContentGrid, { ContentItem } from "@/components/layout/ContentGrid";
import Divider from "@/components/common/Divider";
import Link from "@/components/common/Link";
import HeroText from "@/components/sections/HeroText";

// Grid items for the Grants page
const items: ContentItem[] = [
  {
    id: "travel-grant",
    title: "ASSU Travel Grant",
    mergeKey: "travel",
    node: <div />,
  },
  {
    id: "travel-grant-desc",
    title: "",
    mergeKey: "travel",
    node: (
      <div className="leading-relaxed">
        This grant was created to financially assist full-time undergraduate
        Arts & Science students presenting their own research at academic
        conferences. Grants are strictly for the costs of travel (e.g., airfare,
        train fare). The amount of a single grant is up to 40% of your ticket to
        a max of $250, regardless of conference location or estimated expenses.
        <div className="mt-2">
          <Link href="https://assu.ca/wp/services-resources/assu-travel-grant/">
            2024 Travel Grant Application
          </Link>
        </div>
      </div>
    ),
  },
  {
    id: "deferred-exam-fee-1",
    title: "Deferred Exam Fee Grant",
    mergeKey: "defer",
    node: <div />,
  },
  {
    id: "deferred-exam-fee-1-desc",
    title: "",
    mergeKey: "defer",
    node: (
      <div className=" leading-relaxed">
        This grant was created to financially assist full-time undergraduate
        Arts & Science students with the costs of deferred exam fees in a
        situation where they need to postpone their final exam due to physical
        or mental illness. The amount of the grant is up to $120 which can only
        be applied to the fee associated with a deferred exam, regardless of
        additional circumstances.
        <div className="mt-2">
          <Link href="https://assu.ca/wp/services-resources/deferred-exam-fee-grant/">
            Deferred Exam Fee Grant Application
          </Link>
        </div>
      </div>
    ),
  },
  {
    id: "donation-requests",
    title: "Donation Requests",
    mergeKey: "donation",
    node: <div />,
  },
  {
    id: "donation-requests-desc",
    title: "",
    mergeKey: "donation",
    node: (
      <div className="leading-relaxed">
        All ASSU Members are eligible to submit requests for monetary donations
        from ASSU towards events and/or initiatives which enhance the
        undergraduate student experience. The primary contact must be an ASSU
        member for all donation requests. Eligibility does not guarantee
        approval; all requests are subject to review and approval by the ASSU
        Executive.
        <div className="mt-2">
          <Link href="https://assu.ca/wp/services-resources/donation-requests/">
            ASSU Donation Request Form
          </Link>
        </div>
      </div>
    ),
  },
];

export default function GrantsPage() {
  return (
    <div className="min-h-screen " aria-labelledby="page-title">
      <HeroText text="ASSU Grants"></HeroText>

      <p className="mt-6 mb-8 text-base md:text-lg text-gray-700">
        All forms should be submitted to{" "}
        <Link href="/contact-us">ASSU office (Sid Smith Room 1068)</Link>, or
        email{" "}
        <Link href="mailto:students.assu@utoronto.ca">
          students.assu@utoronto.ca
        </Link>
        .
      </p>

      <Divider margin="0" />

      <ContentGrid
        items={items}
        columns={2}
        ariaLabel="ASSU grants grid"
        className="mt-2"
      />

      <Divider />
    </div>
  );
}
