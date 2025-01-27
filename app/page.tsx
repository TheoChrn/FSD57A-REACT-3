import { Greeting } from "@/components/greeting";
import { Posts } from "@/components/posts";
import { getPosts } from "@/lib/fetch";
import { getQueryClient } from "@/lib/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });

  return (
    <div className="space-y-8 max-w-screen-lg mx-auto">
      <Greeting name="John Doe" />
      <Greeting name="Jane Doe" age={32} />
      <Suspense fallback={<p>Loading...</p>}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Posts />
        </HydrationBoundary>
      </Suspense>
    </div>
  );
}
