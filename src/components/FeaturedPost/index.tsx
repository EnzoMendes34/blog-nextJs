import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function FeaturedPost() {
  const slug = "qualquer";
  const postLink = `/post/${slug}`;

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
            src: "/images/bryen_9.png",
            alt: "Alt da imagem",
            priority: true,
          }}
        />
        <div className='justify-center flex sm:justify-center flex-col gap-3'>
          <time
            className='text-slate-600 text-sm/tight block'
            dateTime='2025-04-20'
          >
            20/04/2025 11:59
          </time>

          <PostHeading as='h1' url={postLink}>
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
    </>
  );
}
