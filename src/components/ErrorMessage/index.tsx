"use client";

import clsx from "clsx";

type ErrorMessageProps = {
  pageTitle?: string;
  contentTitle: string;
  content: React.ReactNode;
};

export default function ErrorMessage({
  pageTitle = "",
  contentTitle,
  content,
}: ErrorMessageProps) {
  return (
    <>
      {pageTitle && <title>{pageTitle}</title>}
      <div
        className={clsx(
          "mb-16",
          "bg-slate-900",
          "min-h-80",
          "p-8",
          "text-slate-100",
          "rounded-xl",
          "flex",
          "items-center",
          "justify-center text-center",
          "mx-1.5",
        )}
      >
        <div>
          <h1 className='mb-4 font-extrabold text-8xl/normal'>
            {contentTitle}
          </h1>
          <div className='font-bold text-2xl'>{content}</div>
        </div>
      </div>
    </>
  );
}
