import { render, screen } from "@testing-library/react";
import BlogList from "../BlogList";
import React from "react";

const mockPosts = [
  {
    image: "/images/involved-upcoming-1.webp",
    date: "March 4, 2025",
    title: "Test Raffle Contest!",
    description:
      "Our famous test library exists solely because students donate their tests...",
  },
  {
    image: "/images/involved-upcoming-2.webp",
    date: "March 2, 2025",
    title: "Join Our Team",
    description:
      "ASSU Election Nominations are open! Are you looking to get more involved...",
  },
];

describe("BlogList", () => {
  it("renders the correct number of BlogCards", () => {
    render(<BlogList posts={mockPosts} />);
    const titles = screen.getAllByRole("heading", { level: 2 });
    expect(titles).toHaveLength(mockPosts.length);
  });

  it("displays the correct blog post titles", () => {
    render(<BlogList posts={mockPosts} />);
    mockPosts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
    });
  });

  it("displays the correct blog post descriptions", () => {
    render(<BlogList posts={mockPosts} />);
    mockPosts.forEach((post) => {
      expect(screen.getByText(post.description)).toBeInTheDocument();
    });
  });
});
