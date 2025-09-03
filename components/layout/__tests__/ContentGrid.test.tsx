import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { within } from "@testing-library/dom";
import ContentGrid, { ContentItem } from "../ContentGrid";

function getMobileGrid() {
  const grids = screen.getAllByRole("grid");
  const mobile = grids.find((g) => g.className.includes("md:hidden"));
  if (!mobile) throw new Error("Mobile grid not found");
  return mobile;
}

function getDesktopGrid() {
  const grids = screen.getAllByRole("grid");
  const desktop = grids.find((g) => g.className.includes("hidden md:grid"));
  if (!desktop) throw new Error("Desktop grid not found");
  return desktop;
}

describe("ContentGrid (mobile merge + desktop grid)", () => {
  const baseItems: ContentItem[] = [
    { id: "a", title: "A", description: "A-desc", mergeKey: "x" },
    { id: "b", title: "B", description: "B-desc", mergeKey: "x" }, // merges with A
    { id: "c", title: "C", description: "C-desc" },                 // solo
    { id: "d", title: "D", description: "D-desc", mergeKey: "y" },
    { id: "e", title: "E", description: "E-desc", mergeKey: "y" }, // merges with D
  ];
  // expected mobile groups: [ [A,B], [C], [D,E] ] => 3 cells on mobile

  it("renders two grids: mobile (md:hidden) and desktop (hidden md:grid)", () => {
    render(<ContentGrid items={baseItems} columns={2} ariaLabel="Content grid" />);

    const grids = screen.getAllByRole("grid");
    expect(grids.length).toBe(2);

    const mobile = getMobileGrid();
    const desktop = getDesktopGrid();

    expect(mobile).toHaveClass("md:hidden");
    expect(mobile).toHaveClass("grid-cols-1");
    expect(desktop).toHaveClass("hidden", "md:grid");

    // desktop grid has ARIA row/col counts; mobile grid intentionally does not
    expect(desktop).toHaveAttribute("aria-colcount", "2");
    // 5 items with 2 columns -> 3 rows on desktop
    expect(desktop).toHaveAttribute("aria-rowcount", "3");
  });

  it("merges adjacent items with the same mergeKey on mobile", () => {
    render(<ContentGrid items={baseItems} columns={2} />);

    const mobile = getMobileGrid();
    const mobileCells = within(mobile).getAllByRole("gridcell");
    expect(mobileCells.length).toBe(3); // [A+B], [C], [D+E]

    // First merged group contains A and B
    expect(within(mobileCells[0]).getByText("A")).toBeInTheDocument();
    expect(within(mobileCells[0]).getByText("B")).toBeInTheDocument();

    // Middle group is C only
    expect(within(mobileCells[1]).getByText("C")).toBeInTheDocument();
    expect(within(mobileCells[1]).queryByText("D")).not.toBeInTheDocument();

    // Last merged group contains D and E
    expect(within(mobileCells[2]).getByText("D")).toBeInTheDocument();
    expect(within(mobileCells[2]).getByText("E")).toBeInTheDocument();
  });

  it("does not merge on mobile when mergeAdjacentOnMobile is false", () => {
    render(
      <ContentGrid
        items={baseItems}
        columns={2}
        mergeAdjacentOnMobile={false}
      />
    );

    const mobile = getMobileGrid();
    const mobileCells = within(mobile).getAllByRole("gridcell");
    expect(mobileCells.length).toBe(baseItems.length); // 5 cells (no merging)
  });

  it("desktop grid renders one cell per item and keeps ARIA labeling tied to titles", () => {
    render(<ContentGrid items={baseItems} columns={2} />);

    const desktop = getDesktopGrid();

    // Desktop has all items displayed individually
    const cells = within(desktop).getAllByRole("gridcell");
    expect(cells.length).toBe(baseItems.length); // 5

    // Each titled item should set aria-labelledby to its title element
    cells.forEach((cell) => {
      const labelledBy = cell.getAttribute("aria-labelledby");
      if (labelledBy) {
        const titleEl = document.getElementById(labelledBy);
        expect(titleEl).toBeTruthy();
        expect(titleEl).toHaveClass("text-base", "md:text-lg", "font-semibold");
      }
      // All cells are focusable
      expect(cell).toHaveAttribute("tabindex", "0");
    });

    // Titles and one description spot-check
    baseItems.forEach((it) => {
      expect(within(desktop).getByText(it.title ?? "")).toBeInTheDocument();
    });
    expect(within(desktop).getByText("C-desc")).toBeInTheDocument();
  });

  it("applies separator classes: mobile top rule between groups, desktop top/left rules by position", () => {
    render(<ContentGrid items={baseItems} columns={2} />);

    // MOBILE: every group after the first gets a top divider (via before:absolute)
    const mobile = getMobileGrid();
    const mobileCells = within(mobile).getAllByRole("gridcell");
    expect(mobileCells[0].className).not.toMatch(/before:absolute/);
    expect(mobileCells[1].className).toMatch(/before:absolute/);
    expect(mobileCells[2].className).toMatch(/before:absolute/);

    // DESKTOP: top rule on non-first rows; left rule on non-first columns (md:after:absolute)
    const desktop = getDesktopGrid();
    const desktopCells = within(desktop).getAllByRole("gridcell");
    // Desktop layout indices (2 columns):
    // row1: [0,1], row2: [2,3], row3: [4]
    // - cell[1]: first row, second col => has left rule (md:after)
    // - cell[2]: second row, first col => has top rule (md:before)
    // - cell[3]: second row, second col => top + left rules
    expect(desktopCells[1].className).toMatch(/md:after:absolute/);
    expect(desktopCells[2].className).toMatch(/md:before:absolute/);
    expect(desktopCells[3].className).toMatch(/md:before:absolute/);
    expect(desktopCells[3].className).toMatch(/md:after:absolute/);
  });

  it("honors custom ariaLabel and container className", () => {
    render(
      <ContentGrid
        items={baseItems}
        columns={3}
        ariaLabel="Custom Grid"
        className="max-w-5xl mx-auto"
      />
    );

    const desktop = getDesktopGrid();
    expect(desktop).toHaveAttribute("aria-label", "Custom Grid");
    expect(desktop.className).toMatch(/mx-auto/);
    // ensure columns reflected
    expect(desktop.className).toMatch(/md:grid-cols-3/);
  });
});