import { render, screen } from "@testing-library/react";
import AssuImage from "../AssuImage";

// Mock next/image for Jest environment
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ComponentProps<"img">) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />;
  },
}));

describe("AssuImage", () => {
  it("renders with alt text and caption", () => {
    render(
      <AssuImage
        src="/vercel.svg"
        alt="Vercel"
        caption="Caption text"
        overlay="Overlay"
      />
    );

    expect(screen.getByRole("group")).toBeInTheDocument();
    expect(screen.getByText("Caption text")).toBeInTheDocument();
  });
});
