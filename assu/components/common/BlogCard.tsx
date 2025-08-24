import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import React from "react";

type BlogCardProps = {
  image: string;
  date: string;
  title: string;
  description: string;
};

export default function BlogCard({
  image,
  date,
  title,
  description,
}: BlogCardProps) {
  return (
    <Card className="flex flex-col md:flex-row gap-4 p-4 bg-white shadow-md rounded-none">
      <div className="w-full md:w-1/3 relative aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-none"
        />
      </div>
      <CardContent className="flex-1 space-y-2">
        <p className="text-sm font-bold text-gray-dark underline">{date}</p>
        <h2 className="text-xl font-bold text-black">{title}</h2>
        <p
          style={{ whiteSpace: "pre-line" }}
          className="text-gray-dark text-sm"
        >
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
