import { Suspense } from "react";
import { SpinLoader } from "@/components/SpinLoader";
import { PostsList } from "@/components/PostsList";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { PostHeading } from "@/components/PostHeading";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <Link className='w-full h-full overflow-hidden rounded-xl' href='#'>
          <Image
            className='w-full h-full object-cover object-center group-hover:scale-105 transition'
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Título do post'
            priority
          />
        </Link>
        <div className='justify-center flex sm:justify-center flex-col gap-3'>
          <time
            className='text-slate-600 text-sm/tight block'
            dateTime='2025-04-20'
          >
            20/04/2025 11:59
          </time>

          <PostHeading as='h1' url='#'>
            Post title, Just testing
          </PostHeading>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            eligendi ex, animi perferendis iure vel quidem beatae iste commodi
            enim velit cum quibusdam earum numquam corrupti omnis labore
            deserunt nobis. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sed eligendi ex, animi perferendis iure vel quidem beatae iste
            commodi enim velit cum quibusdam earum numquam corrupti omnis labore
            deserunt nobis.
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <header>
        <h1 className='text-6xl font-bold text-center py-8'>Aqui é a Header</h1>
      </header>
    </Container>
  );
}
