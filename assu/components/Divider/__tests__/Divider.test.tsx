import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Divider from "../Divider";

describe("Divider", () => {
  it("renders divider element", () => {
    render(<Divider />);
    const divider = screen.getByTestId("divider");
    expect(divider).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Divider className="custom-divider" />);
    const divider = screen.getByTestId("divider");
    expect(divider).toHaveClass("custom-divider");
  });
});
