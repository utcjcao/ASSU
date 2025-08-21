import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContentGrid, { ContentItem } from "../ContentGrid";

const items: ContentItem[] = [
  { id: "a", title: "Increasing Accessibility", description: "on campus" },
  { id: "b", title: "Ethics pre-requisite", description: "module" },
  { id: "c", title: "Syllabus archive", description: "Digital Syllabus archive" },
  { id: "d", title: "Room 1068", description: "ASSU Podcast" },
];

describe("ContentGrid", () => {
  it("renders a grid with correct ARIA roles and counts", () => {
    render(<ContentGrid items={items} columns={2} ariaLabel="Content grid" />);

    const grid = screen.getByRole("grid", { name: /content grid/i });
    expect(grid).toBeInTheDocument();
    // 4 items, 2 columns -> 2 rows
    expect(grid).toHaveAttribute("aria-colcount", "2");
    expect(grid).toHaveAttribute("aria-rowcount", "2");
    // centered container class
    expect(grid.className).toMatch(/mx-auto/);
  });

  it("chunks items into rows and renders a gridcell for each item", () => {
    render(<ContentGrid items={items} columns={2} />);
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(2);

    const cells = screen.getAllByRole("gridcell");
    expect(cells.length).toBe(items.length);

    // Each cell is focusable and labeled by its title id
    cells.forEach((cell, idx) => {
      expect(cell).toHaveAttribute("tabindex", "0");
      const labelledBy = cell.getAttribute("aria-labelledby");
      expect(labelledBy).toBeTruthy();
      const titleEl = document.getElementById(labelledBy!);
      expect(titleEl).toBeTruthy();
      expect(titleEl).toHaveTextContent(items[idx].title);
    });
  });

  it("applies partial divider classes on correct cells (top/left) with 2x2 layout", () => {
    render(<ContentGrid items={items} columns={2} />);
    const cells = screen.getAllByRole("gridcell");

    // Index mapping in DOM order for 2 columns:
    // [0,1] -> first row | [2,3] -> second row
    // Cell 1 (first row, second col) => should have LEFT divider only (after:)
    expect(cells[1].className).toMatch(/after:absolute/);
    expect(cells[1].className).not.toMatch(/before:absolute/);

    // Cell 2 (second row, first col) => should have TOP divider only (before:)
    expect(cells[2].className).toMatch(/before:absolute/);
    expect(cells[2].className).not.toMatch(/after:absolute/);

    // Cell 3 (second row, second col) => should have BOTH
    expect(cells[3].className).toMatch(/before:absolute/);
    expect(cells[3].className).toMatch(/after:absolute/);
  });

  it("renders titles and optional descriptions", () => {
    render(<ContentGrid items={items} columns={2} />);
    // Titles
    items.forEach((it) => {
      expect(screen.getByText(it.title)).toBeInTheDocument();
    });
    // A sample description exists
    expect(screen.getByText(/Digital Syllabus archive/i)).toBeInTheDocument();
  });
});