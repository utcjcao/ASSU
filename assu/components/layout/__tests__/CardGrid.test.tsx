import React from "react";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";

// Adjust the import path to match your repo
import CardGrid from "@/components/layout/CardGrid";
import ImageCard from "@/components/common/ImageCard";

type ImageCardProps = React.ComponentProps<typeof ImageCard>;

// Mock ImageCard so we don't rely on its internals
jest.mock("@/components/common/ImageCard", () => {
  return function MockImageCard(props: ImageCardProps) {
    return (
      <div data-testid="mock-image-card" aria-label={props.title}>
        {props.title}
      </div>
    );
  };
});

const makeItems = (n: number) =>
  Array.from({ length: n }).map((_, i) => ({
    id: `id-${i}`,
    imageSrc: `/img-${i}.webp`,
    imageAltText: `alt ${i}`,
    title: `Title ${i}`,
    subtitle: `Sub ${i}`,
    description: `Desc ${i}`,
  }));

describe("CardGrid", () => {
  test("renders a grid with correct aria label (default)", () => {
    render(<CardGrid items={makeItems(3)} />);
    const grid = screen.getByRole("grid", { name: /card grid/i });
    expect(grid).toBeInTheDocument();
  });

  test("renders the expected number of gridcells and mocked cards", () => {
    render(<CardGrid items={makeItems(5)} columns={4} />);
    const cells = screen.getAllByRole("gridcell");
    expect(cells).toHaveLength(5);
    const cards = screen.getAllByTestId("mock-image-card");
    expect(cards).toHaveLength(5);
  });

  test("applies fixed spacing and auto-fit columns via inline styles", () => {
    const gapPx = 20;
    const cardWidthPx = 320;

    render(
      <CardGrid
        items={makeItems(4)}
        columns={4}
        gapPx={gapPx}
        cardWidthPx={cardWidthPx}
      />
    );

    const grid = screen.getByRole("grid");
    // Style assertions (inline styles are camelCased on the element.style)
    expect(grid).toHaveStyle({
      columnGap: `${gapPx}px`,
      rowGap: `${gapPx}px`,
      gridTemplateColumns: `repeat(auto-fit, ${cardWidthPx}px)`,
    });
  });

  test("caps max width based on columns, cardWidthPx and gapPx", () => {
    // columns=4, cardWidth=300, gap=16 => maxWidth = 4*300 + 3*16 = 1248px
    render(
      <CardGrid items={makeItems(6)} columns={4} cardWidthPx={300} gapPx={16} />
    );

    const grid = screen.getByRole("grid");
    expect(grid).toHaveStyle({ maxWidth: "1248px" });
  });

  test("uses default columns=3 for maxWidth when columns not provided", () => {
    // default columns=3, cardWidth=300, gap=16 => maxWidth = 3*300 + 2*16 = 932px
    render(<CardGrid items={makeItems(3)} />);
    const grid = screen.getByRole("grid");
    expect(grid).toHaveStyle({ maxWidth: "932px" });
  });

  test("each gridcell exposes an sr-only title id referenced by aria-labelledby", () => {
    render(<CardGrid items={makeItems(2)} columns={2} />);

    const cells = screen.getAllByRole("gridcell");
    cells.forEach((cell) => {
      const id = cell.getAttribute("aria-labelledby");
      expect(id).toBeTruthy();

      // The referenced sr-only span should exist in the same cell
      const hidden = within(cell).getByText(/Title \d/, { selector: "span" });
      expect(hidden).toBeInTheDocument();
    });
  });
});
