import { PostCoverImage } from "../PostCoverImage";
import { PostContent } from "../PostContent/PostContent";
import clsx from "clsx";
import { findAllPublicPostsCached } from "@/lib/post/queries";

export async function PostsList() {
  const posts = await findAllPublicPostsCached();

  return (
    <>
      <div
        className={clsx(
          "grid",
          "grid-cols-1",
          "gap-8",
          "sm:grid-cols-2",
          "lg:grid-cols-3",
        )}
      >
        {posts.slice(1).map(post => {
          const postLink = `/post/${post.slug}`;

          return (
            <div
              className='flex flex-col group gap-4 min-w-0 w-full'
              key={post.id}
            >
              <PostCoverImage
                linkProps={{
                  href: postLink,
                }}
                imageProps={{
                  width: 1200,
                  height: 720,
                  src: post.coverImageUrl,
                  alt: post.title,
                }}
              />
              <PostContent
                createdAt={post.createdAt}
                title={post.title}
                url={postLink}
              >
                {post.excerpt}
              </PostContent>
            </div>
          );
        })}
      </div>
    </>
  );
}
