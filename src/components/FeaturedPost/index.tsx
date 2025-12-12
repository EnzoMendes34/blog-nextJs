import { PostContent } from "../PostContent/PostContent";
import { PostCoverImage } from "../PostCoverImage";

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
          <PostContent
            title={"Rotina matinal de pessoas altamente eficazes"}
            createdAt={"2025-04-08T00:24:38.616Z"}
            url={"#"}
            as={"h1"}
          >
            This is a test, Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Corporis harum magnam eaque, obcaecati nostrum ipsam dolorum
            saepe provident nemo quasi illum tempore illo vel, beatae optio unde
            ducimus similique pariatur.
          </PostContent>
        </div>
      </section>
    </>
  );
}
