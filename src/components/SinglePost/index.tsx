import { findPostBySlugCached } from "@/lib/queries";
import Image from "next/image";
import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";
import { formatDateTime } from "@/utils/formate-datetime";
import { SafeMarkDown } from "../SafeMarkDown";

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug);

  return (
    <>
      <article className='mx-8 mb-16'>
        <header className=' group flex flex-col gap-6 mb-4'>
          <Image
            className='rounded-xl '
            src={post.coverImageUrl}
            width={1200}
            height={720}
            alt={post.title}
          />

          <PostHeading as='h1' url={`/post/${post.slug}`}>
            {post.title}
          </PostHeading>

          <p>
            {post.author} |{" "}
            <PostDate createdAt={post.createdAt}>
              {formatDateTime(post.createdAt)}
            </PostDate>
          </p>
        </header>

        <p className='mb-8 text-xl italic'>{post.excerpt}</p>

        <SafeMarkDown markdown={post.content} />
      </article>
    </>
  );
}
