"use client";

import { Post } from "@/components/post";
import { getPosts } from "@/lib/fetch";
import { useSuspenseQuery } from "@tanstack/react-query";

export function Posts() {
  const { data } = useSuspenseQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });

  return (
    <div className="space-y-8  ">
      {data.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}
