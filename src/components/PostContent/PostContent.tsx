import React from "react";
import { PostHeading } from "../PostHeading";

type PostContentProps = {
  title: string;
  children: React.ReactNode;
  createdAt: string;
  url: string;
};

export function PostContent({
  title,
  children,
  createdAt,
  url,
}: PostContentProps) {
  return (
    <>
      <div className='flex sm:justify-center flex-col gap-3'>
        <time
          className='text-slate-600 text-sm/tight block'
          dateTime={createdAt}
        >
          {createdAt}
        </time>

        <PostHeading as='h2' url={url}>
          {title}
        </PostHeading>

        <p>{children}</p>
      </div>
    </>
  );
}
