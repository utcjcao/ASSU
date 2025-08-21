import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContentGrid, { ContentItem } from "../ContentGrid";

const items: ContentItem[] = [
  { id: "a", title: "Increasing Accessibility", description: "on campus" },
  { id: "b", title: "Ethics pre-requisite", description: "module" },
  { id: "c", title: "Syllabus archive", description: "Digital Syllabus archive" },
  { id: "d", title: "Room 1068", description: "ASSU Podcast" },
];

describe("ContentGrid (updated)", () => {
  it("renders a grid with correct ARIA roles and counts", () => {
    render(<ContentGrid items={items} columns={2} ariaLabel="Content grid" />);

    const grid = screen.getByRole("grid", { name: /content grid/i });
    expect(grid).toBeInTheDocument();
    // 4 items, 2 columns => 2 rows
    expect(grid).toHaveAttribute("aria-colcount", "2");
    expect(grid).toHaveAttribute("aria-rowcount", "2");

    // centered + fixed cols authoring checks (class presence)
    expect(grid.className).toMatch(/mx-auto/);
    expect(grid.className).toMatch(/grid-cols-2/);
  });

  it("chunks into rows and renders a gridcell for each item", () => {
    render(<ContentGrid items={items} columns={2} />);
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(2);

    const cells = screen.getAllByRole("gridcell");
    expect(cells.length).toBe(items.length);

    // Each cell is keyboard-focusable
    cells.forEach((cell) => {
      expect(cell).toHaveAttribute("tabindex", "0");
    });
  });

  it("applies partial divider classes to the correct cells (2x2 layout)", () => {
    render(<ContentGrid items={items} columns={2} />);
    const cells = screen.getAllByRole("gridcell");

    // DOM order for 2 columns: [0,1] first row, [2,3] second row
    // Cell 0: first row, first col -> no before/after dividers
    expect(cells[0].className).not.toMatch(/before:absolute/);
    expect(cells[0].className).not.toMatch(/after:absolute/);

    // Cell 1: first row, second col -> left divider only (after:)
    expect(cells[1].className).not.toMatch(/before:absolute/);
    expect(cells[1].className).toMatch(/after:absolute/);

    // Cell 2: second row, first col -> top divider only (before:)
    expect(cells[2].className).toMatch(/before:absolute/);
    expect(cells[2].className).not.toMatch(/after:absolute/);

    // Cell 3: second row, second col -> both dividers
    expect(cells[3].className).toMatch(/before:absolute/);
    expect(cells[3].className).toMatch(/after:absolute/);
  });

  it("renders titles, descriptions, and an optional node with top padding", () => {
    const withNode: ContentItem[] = [
      ...items.slice(0, 3),
      {
        id: "node",
        node: <span>Inner component</span>,
        title: "Node Title",
        description: "Node Desc",
      },
    ];

    render(<ContentGrid items={withNode} columns={2} />);

    // Titles/descriptions present
    expect(screen.getByText(/Increasing Accessibility/i)).toBeInTheDocument();
    expect(screen.getByText(/Digital Syllabus archive/i)).toBeInTheDocument();

    // Node rendered, wrapped with pt-5 according to component
    const inner = screen.getByText(/Inner component/i);
    const wrapper = inner.closest("div");
    expect(wrapper).toBeTruthy();
    expect(wrapper!.className).toMatch(/\bpt-5\b/);
  });
});