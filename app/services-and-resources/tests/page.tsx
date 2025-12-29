import React from "react";
import HeroText from "../../../components/sections/HeroText";
import Divider from "../../../components/common/Divider";
import { KeyValueList } from "../../../components/common/KeyValueList";
import Text from "../../../components/common/Text";
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
    <div className="w-full mx-auto space-y-4">
      <HeroText text="Past Test Library" />
      <Text
        as="div"
        className="text-gray-dark text-sm whitespace-pre-line space-y-4 mb-0"
      >
        <Text as="p" color="gray-dark" className="text-sm mb-0">
          All the tests listed below have been donated by students in the past.
        </Text>
        <Text as="p" color="gray-dark" className="text-sm mb-0">
          You can access them at our{" "}
          <Text as="span" color="pink" className="font-medium mb-0">
            ASSU office at SS1068
          </Text>{" "}
          (not available online).
        </Text>
        <Text as="p" color="gray-dark" className="text-sm mb-0">
          We are currently having a Test Drive in attempts to greatly expand our
          test bank. We are having a draw for the students who donate tests we
          don&apos;t currently have.{" "}
          <Text as="span" color="pink" className="font-medium mb-0">
            Past tests can be submitted to the ASSU office.
          </Text>
        </Text>
      </Text>

      <Divider />
      <KeyValueList items={testData} />
      <Divider />
    </div>
  );
}
