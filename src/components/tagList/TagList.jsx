import React from "react";
import { Badge } from "@/components/ui/badge";
import { LayoutGrid } from "lucide-react";

const data = [
  { title: "Music" },
  { title: "Festivals & Fairs" },
  { title: "Cultural" },
  { title: "Food & Drink" },
  { title: "Health" },
  { title: "Cars & Bikes" },
  { title: "Performing Art" },
];

const TagList = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 text-content mt-12">
      <div className="flex gap-2">
        <LayoutGrid className="text-primary" />
        <h2 className="text-lg font-semibold text-content uppercase">
          Popular Categories
        </h2>
      </div>

      <div className="flex gap-2 flex-wrap mt-6">
        {data.map((tag) => (
          <Badge key={tag.title} variant="outline" className="cursor-pointer bg-white py-1 px-4">
            {tag.title}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default TagList;
