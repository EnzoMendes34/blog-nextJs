import { PostContent } from "../PostContent/PostContent";
import { PostCoverImage } from "../PostCoverImage";
import { findAllPublicPostsCached } from "@/lib/post/queries";

export async function FeaturedPost() {
  const posts = await findAllPublicPostsCached();
  const post = posts[0];

  const postLink = `/post/${post.slug}`;

  return (
    <>
      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <PostCoverImage
          linkProps={{
            href: postLink,
          }}
          imageProps={{
            width: 1200,
            height: 720,
            src: post.coverImageUrl,
            alt: post.title,
            priority: true,
          }}
        />
        <div className='justify-center flex sm:justify-center flex-col gap-3'>
          <PostContent
            title={post.title}
            createdAt={post.createdAt}
            url={postLink}
            as={"h1"}
          >
            {post.excerpt}
          </PostContent>
        </div>
      </section>
    </>
  );
}
