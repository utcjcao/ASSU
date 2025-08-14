import { render, screen, fireEvent } from "@testing-library/react";
import Tabs, { TabItem } from "../Tabs";

const mockTabs: TabItem[] = [
  {
    id: "tab1",
    label: "Tab 1",
    content: <div>Content for Tab 1</div>,
  },
  {
    id: "tab2",
    label: "Tab 2",
    content: <div>Content for Tab 2</div>,
  },
  {
    id: "tab3",
    label: "Tab 3",
    content: <div>Content for Tab 3</div>,
  },
];

describe("Tabs Component", () => {
  it("renders all tabs and default content", () => {
    render(<Tabs tabs={mockTabs} />);
    
    // Check that all tab buttons are rendered
    expect(screen.getByRole("button", { name: /tab 1/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /tab 2/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /tab 3/i })).toBeInTheDocument();
    
    // Check that the first tab's content is displayed by default
    expect(screen.getByText("Content for Tab 1")).toBeInTheDocument();
    expect(screen.queryByText("Content for Tab 2")).not.toBeInTheDocument();
  });

  it("switches tabs when clicked", () => {
    render(<Tabs tabs={mockTabs} />);
    
    // Click on Tab 2
    fireEvent.click(screen.getByRole("button", { name: /tab 2/i }));
    
    // Check that Tab 2 content is now displayed
    expect(screen.getByText("Content for Tab 2")).toBeInTheDocument();
    expect(screen.queryByText("Content for Tab 1")).not.toBeInTheDocument();
  });

  it("has proper ARIA attributes", () => {
    render(<Tabs tabs={mockTabs} />);
    
    const tabList = screen.getByRole("tablist");
    const firstTab = screen.getByRole("button", { name: /tab 1/i });
    const tabPanel = screen.getByRole("tabpanel");
    
    expect(tabList).toHaveAttribute("aria-label", "Tabs navigation");
    expect(firstTab).toHaveAttribute("aria-selected", "true");
    expect(firstTab).toHaveAttribute("tabindex", "0");
    expect(tabPanel).toHaveAttribute("aria-labelledby", "tab-tab1");
  });

  it("handles keyboard navigation", () => {
    render(<Tabs tabs={mockTabs} />);
    
    const firstTab = screen.getByRole("button", { name: /tab 1/i });
    const secondTab = screen.getByRole("button", { name: /tab 2/i });
    
    // Focus first tab and press ArrowRight
    firstTab.focus();
    fireEvent.keyDown(firstTab, { key: "ArrowRight" });
    
    // Second tab should be active
    expect(screen.getByText("Content for Tab 2")).toBeInTheDocument();
  });

  it("activates tab with Enter key", () => {
    render(<Tabs tabs={mockTabs} />);
    
    const firstTab = screen.getByRole("button", { name: /tab 1/i });
    const secondTab = screen.getByRole("button", { name: /tab 2/i });
    
    // Focus second tab and press Enter
    secondTab.focus();
    fireEvent.keyDown(secondTab, { key: "Enter" });
    
    // Second tab content should be displayed
    expect(screen.getByText("Content for Tab 2")).toBeInTheDocument();
  });

  it("activates tab with Space key", () => {
    render(<Tabs tabs={mockTabs} />);
    
    const thirdTab = screen.getByRole("button", { name: /tab 3/i });
    
    // Focus third tab and press Space
    thirdTab.focus();
    fireEvent.keyDown(thirdTab, { key: " " });
    
    // Third tab content should be displayed
    expect(screen.getByText("Content for Tab 3")).toBeInTheDocument();
  });

  it("calls onTabChange callback when tab is changed", () => {
    const mockOnTabChange = jest.fn();
    render(<Tabs tabs={mockTabs} onTabChange={mockOnTabChange} />);
    
    // Click on Tab 2
    fireEvent.click(screen.getByRole("button", { name: /tab 2/i }));
    
    expect(mockOnTabChange).toHaveBeenCalledWith("tab2");
  });

  it("uses defaultActiveTab prop", () => {
    render(<Tabs tabs={mockTabs} defaultActiveTab="tab2" />);
    
    // Tab 2 content should be displayed initially
    expect(screen.getByText("Content for Tab 2")).toBeInTheDocument();
    expect(screen.queryByText("Content for Tab 1")).not.toBeInTheDocument();
    
    // Tab 2 button should be marked as selected
    const secondTab = screen.getByRole("button", { name: /tab 2/i });
    expect(secondTab).toHaveAttribute("aria-selected", "true");
  });

  it("handles Home and End keys for navigation", () => {
    render(<Tabs tabs={mockTabs} />);
    
    const secondTab = screen.getByRole("button", { name: /tab 2/i });
    
    // Focus second tab and press End key
    secondTab.focus();
    fireEvent.keyDown(secondTab, { key: "End" });
    
    // Last tab (Tab 3) content should be displayed
    expect(screen.getByText("Content for Tab 3")).toBeInTheDocument();
    
    // Focus current tab and press Home key
    const thirdTab = screen.getByRole("button", { name: /tab 3/i });
    fireEvent.keyDown(thirdTab, { key: "Home" });
    
    // First tab content should be displayed
    expect(screen.getByText("Content for Tab 1")).toBeInTheDocument();
  });

  it("wraps around when using arrow keys", () => {
    render(<Tabs tabs={mockTabs} />);
    
    const firstTab = screen.getByRole("button", { name: /tab 1/i });
    const thirdTab = screen.getByRole("button", { name: /tab 3/i });
    
    // From first tab, press ArrowLeft should go to last tab
    firstTab.focus();
    fireEvent.keyDown(firstTab, { key: "ArrowLeft" });
    expect(screen.getByText("Content for Tab 3")).toBeInTheDocument();
    
    // From last tab, press ArrowRight should go to first tab
    fireEvent.keyDown(thirdTab, { key: "ArrowRight" });
    expect(screen.getByText("Content for Tab 1")).toBeInTheDocument();
  });
});
