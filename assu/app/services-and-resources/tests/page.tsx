import React from "react";
import HeroText from "../../../components/sections/HeroText";
import Divider from "../../../components/common/Divider";
import { KeyValueList } from "../../../components/common/KeyValueList";

const testData = [
  { key: "ACT", values: ["240", "245", "247", "348", "349", "370"] },
  { key: "ANA", values: ["300", "301"] },
  { key: "APM", values: ["120", "130"] },
];

const Tests = () => {
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
          don’t currently have.{" "}
          <span className="text-pink font-medium">
            Past tests can be submitted to the ASSU office.
          </span>
        </p>
      </div>

      <Divider
        height="0"
        width="1"
        color="var(--color-line)"
        className="w-full"
        margin="0 0 0.5rem 0"
        maxWidth="100%"
      />

      <KeyValueList items={testData} />
      <Divider
        height="0"
        width="1"
        color="var(--color-line)"
        className="w-full"
        margin="0 0 0.5rem 0"
        maxWidth="100%"
      />
    </div>
  );
};

export default Tests;
