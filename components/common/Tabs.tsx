"use client";

import { useState } from "react";
import {
  Tabs as TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../ui/tabs";

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

  return (
    <TabsRoot
      value={activeTab}
      onValueChange={setActiveTab}
      className={`w-full ${className}`}
    >
      {/* Tab List */}
      <div className="relative md:static">
        <TabsList
          aria-label="Tabs navigation"
          className={`flex md:justify-center border-b-2 border-gray-lighter overflow-x-auto overflow-y-visible scrollbar-hide h-auto items-end bg-transparent p-0 rounded-none ${tabListClassName}`}
        >
          {tabs.map((tab, _index) => {
            const isActive = tab.id === activeTab;
            return (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={`
                md:flex-1 flex-shrink-0 px-6 py-3 pb-4 min-h-[44px] min-w-[44px] font-medium text-lg
                relative rounded-none bg-transparent data-[state=active]:bg-transparent
                transition-all duration-200 ease-in-out shadow-none data-[state=active]:shadow-none
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2
                after:absolute after:left-3 after:right-3 after:bottom-0 after:h-[2px]
                after:bg-gray-light hover:after:bg-gray-darker data-[state=active]:after:bg-gray-darker
                ${
                  isActive
                    ? `text-gray-darker font-bold ${activeTabClassName}`
                    : `text-gray-dark ${tabClassName}`
                }
              `}
                aria-label={tab.ariaLabel || `${tab.label} tab`}
              >
                {tab.label}
              </TabsTrigger>
            );
          })}
        </TabsList>
      </div>

      {/* Tab Panel */}
      {tabs.map((tab) => (
        <TabsContent
          key={tab.id}
          value={tab.id}
          className={`mt-6 p-6 focus:outline-none ${tabPanelClassName}`}
        >
          {tab.content}
        </TabsContent>
      ))}
    </TabsRoot>
  );
}
