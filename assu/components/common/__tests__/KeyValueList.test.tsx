import React from "react";
import { render, screen } from "@testing-library/react";
import { KeyValueList } from "../KeyValueList";

const mockItems = [
  { key: "Course", values: ["CS101"] },
  { key: "Exam Type", values: ["Midterm"] },
  { key: "Year", values: ["2023"] },
];

describe("KeyValueList", () => {
  it("renders all key-value pairs correctly", () => {
    render(<KeyValueList items={mockItems} />);

    mockItems.forEach(({ key, values }) => {
      expect(screen.getByText(key)).toBeInTheDocument();
      values.forEach((value) => {
        expect(screen.getByText(value)).toBeInTheDocument();
      });
    });

    it("renders nothing if items list is empty", () => {
      render(<KeyValueList items={[]} />);
      expect(
        screen.queryByText(/Course|Exam Type|Year/)
      ).not.toBeInTheDocument();
    });
  });
});
