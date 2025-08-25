"use client";

import React from "react";
import ContentGrid, { ContentItem } from "@/components/layout/ContentGrid";
import Divider from "@/components/common/Divider";
import Link from "@/components/common/Link";

// Grid items for Office Services
const items: ContentItem[] = [
  {
    id: "printing",
    title: "Printing Services",
    // node: (
    //       <AssuImage
    //         src="/svg/abs-shape.svg"
    //         alt=""
    //       />
    //     ),
  },
  {
    id: "printing-desc",
    title: "",
    description:
      "We currently offer free printing through our photocopiers. Documents must be on a USB drive and in .pdf format. There is a limit of 8 double-sided or 16 single-sided pages a day. After that, the regular charge of 5 cents a side applies. If you prefer us to print your documents, we have black-and-white printing available in-office for 5 cents a side (10 cents double-sided). You can email your documents and we’ll have them ready. We accept cash or e‑transfers for payment.",
    node: (
      <p className="text-base md:text-lg">
        Email:{" "}
        <Link href="mailto:students.assu@utoronto.ca">
          students.assu@utoronto.ca
        </Link>
      </p>
    ),
  },
  {
    id: "faxing",
    title: "Faxing Services",
    // node: (
    //       <AssuImage
    //         src="/svg/abs-shape.svg"
    //         alt=""
    //       />
    //     ),
  },
  {
    id: "faxing-desc",
    title: "",
    description:
      "We offer a no-charge faxing service on campus. Bring your documents (single‑sided), or email us and we can print them before faxing as well as the fax number you need to send to. We can also receive faxes.",
    node: (
      <p className="text-base md:text-lg">
        Email:{" "}
        <Link href="mailto:students.assu@utoronto.ca">
          students.assu@utoronto.ca
        </Link>
      </p>
    ),
  },
  {
    id: "laptop-loan",
    title: "Laptop Loan Program",
    // node: (
    //       <AssuImage
    //         src="/svg/abs-shape.svg"
    //         alt=""
    //       />
    //     ),
  },
  {
    id: "laptop-loan-desc",
    title: "",
    description:
      "Forgot your laptop or charger? Students can borrow laptops from the ASSU Office (Sidney Smith Hall, 1068) for up to 2 business days (Mon–Fri) on a first‑come, first‑served basis. To borrow, bring a valid TCard or government‑issued ID and a $50 deposit (cash or e‑transfer). The deposit is returned when the laptop is brought back in good condition by 4:00 pm on the due date.",
    node: (
      <p className="text-base md:text-lg">
        Find the full terms and conditions{" "}
        <Link href="/services-and-resources/office-services/laptop-loan-terms">
          here
        </Link>
        .
      </p>
    ),
  },
  {
    id: "cold-pop",
    title: "Cold Pop",
    // node: (
    //       <AssuImage
    //         src="/svg/abs-shape.svg"
    //         alt=""
    //       />
    //     ),
  },
  {
    id: "cold-pop-desc",
    title: "",
    description:
      "We sell non‑brand name pop. Cola, Diet Cola, and Ginger Ale for only 50 cents!",
  },
  {
    id: "locker-rentals",
    title: "Locker Rentals",
    // node: (
    //       <AssuImage
    //         src="/svg/abs-shape.svg"
    //         alt=""
    //       />
    //     ),
  },
  {
    id: "locker-rentals-desc",
    title: "",
    description:
      "We rent lockers in the basement of Sidney Smith Hall. Upper 1/2 size is $55 and Lower 1/2 size is $50. 1/3 size is $40. A $20 refundable key deposit is included in the price. Cash only.",
  },
  {
    id: "past-test-library",
    title: "Past Test Library",
    // node: (
    //       <AssuImage
    //         src="/svg/abs-shape.svg"
    //         alt=""
    //       />
    //     ),
  },
  {
    id: "past-test-library-desc",
    title: "",
    description:
      "We have copies of term tests that students have donated over the years—come by to see what’s available. We’re always accepting new donations! Check the list of available courses below. We do not have hard copies of Faculty final exams; these are available online.",
    node: (
      <div className="space-y-2 text-base md:text-lg">
        <p>
          View the course{" "}
          <Link href="/services-and-resources/tests#available-courses">
            list
          </Link>
          .
        </p>
        <p>
          Faculty final exams:{" "}
          <Link href="https://exams-library-utoronto-ca.myaccess.library.utoronto.ca/">
            exams-library-utoronto-ca.myaccess.library.utoronto.ca
          </Link>
        </p>
      </div>
    ),
  },
];

export default function OfficeServicesPage() {
  return (
    <div className="min-h-screen bg-gray-lighter" aria-labelledby="page-title">
      <main className="max-w-5xl mx-auto px-6 py-12">
        <Divider />
        <h1 id="page-title" className="text-4xl font-bold mb-6">
          Office Services
        </h1>
        <Divider />

        {/* Intro body text under the heading */}
        <p className="mt-6 mb-8 text-base md:text-lg text-gray-700 max-w-4xl">
          Supporting students with essential resources, our office services
          provide printing, study spaces, locker rentals, and administrative
          assistance to enhance your campus experience. Visit us for
          everything you need!
        </p>

        {/* Main content grid */}
        <ContentGrid
          items={items}
          columns={2}
          ariaLabel="Office services"
          className="mt-2"
        />

        <Divider />
      </main>
    </div>
  );
}