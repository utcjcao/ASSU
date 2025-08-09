import { render, screen } from "@testing-library/react";
import HeroImage from "../HeroImage";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />;
  },
}));

describe("HeroImage", () => {
  it("renders hero within container", () => {
    render(<HeroImage src="/vercel.svg" alt="Hero" />);
    expect(screen.getByRole("group")).toBeInTheDocument();
  });
});


