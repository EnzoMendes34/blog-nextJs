import { Suspense } from "react";
import { SpinLoader } from "@/components/SpinLoader";
import { PostsList } from "@/components/PostsList";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { FeaturedPost } from "@/components/FeaturedPost";

export default async function HomePage() {
  return (
    <Container>
      <Header />
      <Suspense fallback={<SpinLoader />}>
        <FeaturedPost />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <h1 className='text-6xl font-bold text-center py-8'>Aqui é o footer</h1>
      </footer>
    </Container>
  );
}
