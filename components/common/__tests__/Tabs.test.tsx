import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
    expect(screen.getByRole("tab", { name: /tab 1 tab/i })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /tab 2 tab/i })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /tab 3 tab/i })).toBeInTheDocument();
    
    // Check that the first tab's content is displayed by default
    expect(
      screen.getByRole("tabpanel", { name: /tab 1 tab/i })
    ).toHaveTextContent("Content for Tab 1");
    expect(screen.queryByText("Content for Tab 2")).not.toBeInTheDocument();
  });

  it("switches tabs when clicked", async () => {
    const user = userEvent.setup();
    render(<Tabs tabs={mockTabs} />);
    
    // Click on Tab 2
    await user.click(screen.getByRole("tab", { name: /tab 2 tab/i }));
    
    // Check that Tab 2 content is now displayed
    expect(
      screen.getByRole("tabpanel", { name: /tab 2 tab/i })
    ).toHaveTextContent("Content for Tab 2");
    expect(screen.queryByText("Content for Tab 1")).not.toBeInTheDocument();
  });

  it("has proper ARIA attributes", () => {
    render(<Tabs tabs={mockTabs} />);
    
    const tabList = screen.getByRole("tablist");
    const firstTab = screen.getByRole("tab", { name: /tab 1 tab/i });
    const tabPanel = screen.getByRole("tabpanel", { name: /tab 1 tab/i });
    
    expect(tabList).toHaveAttribute("aria-label", "Tabs navigation");
    expect(firstTab).toHaveAttribute("aria-selected", "true");
    expect(tabPanel).toHaveAttribute(
      "aria-labelledby",
      firstTab.getAttribute("id")
    );
  });

  it("handles keyboard navigation", async () => {
    const user = userEvent.setup();
    render(<Tabs tabs={mockTabs} />);
    
    const firstTab = screen.getByRole("tab", { name: /tab 1 tab/i });
    
    // Focus first tab and press ArrowRight
    await user.click(firstTab);
    await user.keyboard("{ArrowRight}");
    
    // Second tab should be active
    expect(
      screen.getByRole("tabpanel", { name: /tab 2 tab/i })
    ).toHaveTextContent("Content for Tab 2");
  });

  it("activates tab with Enter key", async () => {
    const user = userEvent.setup();
    render(<Tabs tabs={mockTabs} />);
    
    const secondTab = screen.getByRole("tab", { name: /tab 2 tab/i });
    
    // Focus second tab and press Enter
    secondTab.focus();
    await user.keyboard("{Enter}");
    
    // Second tab content should be displayed
    expect(
      screen.getByRole("tabpanel", { name: /tab 2 tab/i })
    ).toHaveTextContent("Content for Tab 2");
  });

  it("activates tab with Space key", async () => {
    const user = userEvent.setup();
    render(<Tabs tabs={mockTabs} />);
    
    const thirdTab = screen.getByRole("tab", { name: /tab 3 tab/i });
    
    // Focus third tab and press Space
    thirdTab.focus();
    await user.keyboard(" ");
    
    // Third tab content should be displayed
    expect(
      screen.getByRole("tabpanel", { name: /tab 3 tab/i })
    ).toHaveTextContent("Content for Tab 3");
  });

  it("switches active tab when clicked", async () => {
    const user = userEvent.setup();
    render(<Tabs tabs={mockTabs} />);
    
    // Click on Tab 2
    await user.click(screen.getByRole("tab", { name: /tab 2 tab/i }));
    
    // Verify Tab 2 is now active
    const secondTab = screen.getByRole("tab", { name: /tab 2 tab/i });
    expect(secondTab).toHaveAttribute("aria-selected", "true");
    expect(
      screen.getByRole("tabpanel", { name: /tab 2 tab/i })
    ).toHaveTextContent("Content for Tab 2");
  });

  it("uses defaultActiveTab prop", () => {
    render(<Tabs tabs={mockTabs} defaultActiveTab="tab2" />);
    
    // Tab 2 content should be displayed initially
    expect(
      screen.getByRole("tabpanel", { name: /tab 2 tab/i })
    ).toHaveTextContent("Content for Tab 2");
    expect(screen.queryByText("Content for Tab 1")).not.toBeInTheDocument();
    
    // Tab 2 button should be marked as selected
    const secondTab = screen.getByRole("tab", { name: /tab 2 tab/i });
    expect(secondTab).toHaveAttribute("aria-selected", "true");
  });

  it("handles Home and End keys for navigation", async () => {
    const user = userEvent.setup();
    render(<Tabs tabs={mockTabs} />);
    
    const secondTab = screen.getByRole("tab", { name: /tab 2 tab/i });
    
    // Focus second tab and press End key
    await user.click(secondTab);
    await user.keyboard("{End}");
    
    // Last tab (Tab 3) content should be displayed
    expect(
      screen.getByRole("tabpanel", { name: /tab 3 tab/i })
    ).toHaveTextContent("Content for Tab 3");
    
    // Focus current tab and press Home key
    const thirdTab = screen.getByRole("tab", { name: /tab 3 tab/i });
    thirdTab.focus();
    await user.keyboard("{Home}");
    
    // First tab content should be displayed
    expect(
      screen.getByRole("tabpanel", { name: /tab 1 tab/i })
    ).toHaveTextContent("Content for Tab 1");
  });

  it("wraps around when using arrow keys", async () => {
    const user = userEvent.setup();
    render(<Tabs tabs={mockTabs} />);
    
    const firstTab = screen.getByRole("tab", { name: /tab 1 tab/i });
    
    // From first tab, press ArrowLeft should go to last tab
    await user.click(firstTab);
    await user.keyboard("{ArrowLeft}");
    expect(
      screen.getByRole("tabpanel", { name: /tab 3 tab/i })
    ).toHaveTextContent("Content for Tab 3");
    
    // From last tab, press ArrowRight should go to first tab
    const thirdTab = screen.getByRole("tab", { name: /tab 3 tab/i });
    thirdTab.focus();
    await user.keyboard("{ArrowRight}");
    expect(
      screen.getByRole("tabpanel", { name: /tab 1 tab/i })
    ).toHaveTextContent("Content for Tab 1");
  });
});
