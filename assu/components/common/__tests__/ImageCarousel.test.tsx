import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { ImageCarousel } from "../ImageCarousel";

jest.mock("../../ui/carousel", () => ({
  Carousel: ({ children }: React.PropsWithChildren<object>) => (
    <div>{children}</div>
  ),
  CarouselContent: ({ children }: React.PropsWithChildren<object>) => (
    <div>{children}</div>
  ),
  CarouselItem: ({ children }: React.PropsWithChildren<object>) => (
    <div>{children}</div>
  ),
}));

test("ImageCarousel renders and navigates", () => {
  render(<ImageCarousel />);

  // Check initial heading and image
  expect(screen.getByTestId("carousel-heading-0")).toBeInTheDocument();
  expect(screen.getByTestId("carousel-image-0")).toBeInTheDocument();

  // Click next
  fireEvent.click(screen.getByText("▶"));
  expect(screen.getByTestId("carousel-heading-1")).toBeInTheDocument();
  expect(screen.getByTestId("carousel-image-1")).toBeInTheDocument();

  // Click previous
  fireEvent.click(screen.getByText("◀"));
  expect(screen.getByTestId("carousel-heading-0")).toBeInTheDocument();
  expect(screen.getByTestId("carousel-image-0")).toBeInTheDocument();
});
