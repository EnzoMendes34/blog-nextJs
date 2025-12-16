import { Suspense } from "react";
import { SpinLoader } from "@/components/SpinLoader";
import { PostsList } from "@/components/PostsList";
import { Container } from "@/components/Container";
import { FeaturedPost } from "@/components/FeaturedPost";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
  return (
    <Container>
      <Suspense fallback={<SpinLoader className='min-h-20 mb-16' />}>
        <FeaturedPost />
        <PostsList />
      </Suspense>
    </Container>
  );
}
