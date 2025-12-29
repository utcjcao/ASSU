import React from "react";
import HeroText from "../../../components/sections/HeroText";
import Divider from "../../../components/common/Divider";
import { KeyValueList } from "../../../components/common/KeyValueList";
import { fetchTestsData } from "@/lib/tests";

export async function generateStaticParams() {
  try {
    const tests = await fetchTestsData();
    console.log(`Fetched ${tests.length} test courses at build time`);
    return [{}];
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [{}];
  }
}

export default async function Tests() {
  // Fetch tests data at build time
  const testData = await fetchTestsData();

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      <HeroText text="Past Test Library" />

      <div className="text-gray-dark text-sm whitespace-pre-line space-y-4">
        <p>
          All the tests listed below have been donated by students in the past.
        </p>
        <p>
          You can access them at our{" "}
          <span className="text-pink font-medium">ASSU office at SS1068</span>{" "}
          (not available online).
        </p>
        <p>
          We are currently having a Test Drive in attempts to greatly expand our
          test bank. We are having a draw for the students who donate tests we
          don&apos;t currently have.{" "}
          <span className="text-pink font-medium">
            Past tests can be submitted to the ASSU office.
          </span>
        </p>
      </div>

      <Divider />
      <KeyValueList items={testData} />
      <Divider />
    </div>
  );
}
