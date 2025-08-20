import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardGrid from "../CardGrid";

const items = [
  {
    id: "1",
    imageSrc: "/images/one.webp",
    imageAltText: "One",
    title: "African Studies Course Union (ASCU)",
    href: "/unions/ascu",
  },
  {
    id: "2",
    imageSrc: "/images/two.webp",
    imageAltText: "Two",
    title: "Anthropology Students' Association (ASA)",
    href: "/unions/asa",
  },
  {
    id: "3",
    imageSrc: "/images/three.webp",
    imageAltText: "Three",
    title: "Association of Political Science Students (APSS)",
    href: "/unions/apss",
  },
  {
    id: "4",
    imageSrc: "/images/four.webp",
    imageAltText: "Four",
    title: "Astronomy Union (AU)",
    href: "/unions/au",
  },
  {
    id: "5",
    imageSrc: "/images/five.webp",
    imageAltText: "Five",
    title: "Biochemistry Undergraduate Students Society (BUSS)",
    href: "/unions/buss",
  },
];

describe("CardGrid", () => {
  it("renders a grid with proper ARIA roles and counts", () => {
    render(<CardGrid items={items} columns={4} ariaLabel="Unions grid" />);
    const grid = screen.getByRole("grid", { name: /unions grid/i });
    expect(grid).toBeInTheDocument();
    expect(grid).toHaveAttribute("aria-colcount", "4");
    // 5 items with columns=4 -> 2 rows
    expect(grid).toHaveAttribute("aria-rowcount", "2");
  });

  it("chunks items into rows and renders gridcells for each item", () => {
    render(<CardGrid items={items} columns={4} />);
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(2);

    const cells = screen.getAllByRole("gridcell");
    expect(cells.length).toBe(items.length);
  });

  it("links each gridcell to its title via aria-labelledby", () => {
    render(<CardGrid items={items} columns={4} />);
    const cells = screen.getAllByRole("gridcell");

    cells.forEach((cell, idx) => {
      const id = cell.getAttribute("aria-labelledby");
      expect(id).toBeTruthy();
      const labelEl = document.getElementById(id!);
      expect(labelEl).toBeTruthy();
      expect(labelEl!.className).toMatch(/sr-only/);
      expect(labelEl!.textContent).toBe(items[idx].title);
    });
  });

  it("renders interactive links inside each cell with accessible names", () => {
    render(<CardGrid items={items} columns={4} />);
    // Each ImageCard renders an <a aria-label={title}>
    items.forEach((it) => {
      const link = screen.getByRole("link", { name: it.title });
      expect(link).toHaveAttribute("href", it.href);
    });
  });

  it("associates each gridcell with an sr-only title span", () => {
    render(<CardGrid items={items} columns={4} />);
    const cell = screen.getAllByRole("gridcell")[0]; // grab first cell
    const labelledBy = cell.getAttribute("aria-labelledby");
    expect(labelledBy).toBeTruthy();

    const hidden = document.getElementById(labelledBy!);
    expect(hidden).toBeTruthy();
    expect(hidden).toHaveClass("sr-only");
    expect(hidden).toHaveTextContent(items[0].title);
  });
});

it("clamps columns to at least 1 when columns <= 0", () => {
  const single = [
    {
      id: "x",
      imageSrc: "/images/one.webp",
      imageAltText: "One",
      title: "Single",
      href: "/unions/single",
    },
  ];

  // columns={0} hits Math.max(1, columns) path
  render(
    <CardGrid
      items={single}
      columns={0 as unknown as number}
      ariaLabel="Single grid"
    />
  );

  const grid = screen.getByRole("grid", { name: /single grid/i });
  const rows = screen.getAllByRole("row");
  expect(rows.length).toBe(1);
  const cells = screen.getAllByRole("gridcell");
  expect(cells.length).toBe(1);
});

it("applies touch-friendly min size to the grid cells (authoring check)", () => {
  render(<CardGrid items={items} columns={4} />);
  const cells = screen.getAllByRole("gridcell");
  cells.forEach((cell) => {
    expect(cell.className).toMatch(/min-h-11/);
    expect(cell.className).toMatch(/min-w-11/);
  });
});
