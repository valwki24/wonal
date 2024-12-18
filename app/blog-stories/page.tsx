"use client";

import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/Button";
import { StoryPreview } from "@/components/StoryPreview";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

// This would typically come from an API or database
const sampleStories = [
  {
    id: "1",
    title: "Overcoming Challenges",
    author: "Jane Doe",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    fullStory:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "2",
    title: "My Career Journey",
    author: "Emily Smith",
    preview:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    fullStory:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "3",
    title: "Motherhood Adventures",
    author: "Sarah Johnson",
    preview:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    fullStory:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function BlogStories() {
  const [expandedStory, setExpandedStory] = useState<string | null>(null);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1
          className={`text-4xl font-bold text-center mb-8 ${playfair.className}`}
        >
          Blog Stories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {sampleStories.map((story) => (
            <StoryPreview
              key={story.id}
              {...story}
              isExpanded={expandedStory === story.id}
              onReadMore={() => setExpandedStory(story.id)}
              onCollapse={() => setExpandedStory(null)}
            />
          ))}
        </div>
        <div className="text-center">
          <Button>Share Your Story</Button>
        </div>
      </div>
    </Layout>
  );
}
