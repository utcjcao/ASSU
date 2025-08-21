"use client";

import { useState, useRef } from "react";

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  ariaLabel?: string;
}

interface TabsProps {
  tabs: TabItem[];
  defaultActiveTab?: string;
  className?: string;
  tabListClassName?: string;
  tabClassName?: string;
  activeTabClassName?: string;
  tabPanelClassName?: string;
}

export default function Tabs({
  tabs,
  defaultActiveTab,
  className = "",
  tabListClassName = "",
  tabClassName = "",
  activeTabClassName = "",
  tabPanelClassName = "",
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(
    defaultActiveTab || tabs[0]?.id || ""
  );
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tabPanelRef = useRef<HTMLDivElement>(null);

  // Handle tab change
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);

    // Focus the tab panel content for screen readers
    setTimeout(() => {
      tabPanelRef.current?.focus();
    }, 0);
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    let newIndex = index;

    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault();
        newIndex = index > 0 ? index - 1 : tabs.length - 1;
        break;
      case "ArrowRight":
        event.preventDefault();
        newIndex = index < tabs.length - 1 ? index + 1 : 0;
        break;
      case "Home":
        event.preventDefault();
        newIndex = 0;
        break;
      case "End":
        event.preventDefault();
        newIndex = tabs.length - 1;
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        handleTabChange(tabs[index].id);
        return;
      default:
        return;
    }

    // Focus the new tab and update active tab
    tabRefs.current[newIndex]?.focus();
    handleTabChange(tabs[newIndex].id);
  };

  // Set tab refs
  const setTabRef = (index: number) => (ref: HTMLButtonElement | null) => {
    tabRefs.current[index] = ref;
  };

  // const activeTabIndex = tabs.findIndex((tab) => tab.id === activeTab);
  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className={`w-full ${className}`}>
      {/* Tab List */}
      <div
        role="tablist"
        aria-label="Tabs navigation"
        className={`flex justify-center border-b-2 border-gray-lighter ${tabListClassName}`}
      >
        {tabs.map((tab, index) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              ref={setTabRef(index)}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              className={`
                flex-1 px-6 py-3 min-h-[44px] min-w-[44px] font-medium text-lg
                border-b-2 transition-all duration-200 ease-in-out
                focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2
                hover:bg-pink-lighter hover:text-pink
                ${
                  isActive
                    ? `bg-pink-light text-pink border-pink font-bold ${activeTabClassName}`
                    : `bg-transparent text-gray-dark border-pink-lighter ${tabClassName}`
                }
              `}
              onClick={() => handleTabChange(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              aria-label={tab.ariaLabel || `${tab.label} tab`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Panel */}
      {activeTabData && (
        <div
          ref={tabPanelRef}
          role="tabpanel"
          id={`tabpanel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          tabIndex={0}
          className={`
            mt-6 p-6
            focus:outline-none
            ${tabPanelClassName}
          `}
        >
          {activeTabData.content}
        </div>
      )}
    </div>
  );
}
