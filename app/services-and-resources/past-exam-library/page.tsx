import React from "react";
import HeroText from "../../../components/sections/HeroText";
import Divider from "../../../components/common/Divider";
import { KeyValueList } from "../../../components/common/KeyValueList";
import { getCourseTestData, type CourseTestEntry } from "@/lib/wordpress";

export const revalidate = 3600; // Revalidate every hour

export default async function PastExamLibrary() {
  const courseTestData = await getCourseTestData();
  
  // Map CourseTestEntry[] to KeyValueList item format
  const testData = courseTestData.map((entry: CourseTestEntry) => ({
    key: entry.department,
    values: entry.courses,
  }));

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

      <Divider
        height="0"
        color="var(--color-line)"
        className="w-full"
        margin="0 0 0.5rem 0"
        maxWidth="100%"
      />

      <KeyValueList items={testData} />
      
      <Divider
        height="0"
        color="var(--color-line)"
        className="w-full"
        margin="0 0 0.5rem 0"
        maxWidth="100%"
      />
    </div>
  );
}
