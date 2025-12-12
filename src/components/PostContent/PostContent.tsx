import React from "react";
import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";
import { formatDateTime } from "@/utils/formate-datetime";

type PostContentProps = {
  title: string;
  children: React.ReactNode;
  createdAt: string;
  url: string;
  as?: "h1" | "h2";
};

export function PostContent({
  title,
  children,
  createdAt,
  url,
  as: titleSize = "h2",
}: PostContentProps) {
  return (
    <>
      <div className='flex sm:justify-center flex-col gap-3'>
        <PostDate
          styles='text-slate-600 text-sm/tight block'
          createdAt={createdAt}
        >
          {formatDateTime(createdAt)}
        </PostDate>

        <PostHeading as={titleSize} url={url}>
          {title}
        </PostHeading>

        <p>{children}</p>
      </div>
    </>
  );
}
