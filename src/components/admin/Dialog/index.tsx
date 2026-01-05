"use client";

import clsx from "clsx";
import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";

type DialogProps = {
  isVisible?: boolean;
  postTitle: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
};

export function Dialog({
  onCancel,
  onConfirm,
  postTitle,
  isVisible = false,
}: DialogProps) {
  if (!isVisible) return null;

  return (
    <>
      <div
        className={clsx(
          "fixed z-50 inset-0 bg-black/50",
          "backdrop-blur-sm",
          "flex items-center justify-center",
        )}
      >
        <div
          className={clsx(
            "bg-slate-100",
            "p-6 rounded-lg max-w-2xl mx-6",
            "flex flex-col gap-6",
            "shadow-lg shadow-black/50",
            "text-center",
          )}
          role='dialog'
          aria-modal={true}
          aria-labelledby='dialog-title'
          aria-describedby='dialog-description'
        >
          <h3 id='dialog-title' className='text-2xl font-bold'>
            Apagar post?
          </h3>
          <div id='dialog-description'>{`Tem certeza que deseja apagar o post: ${postTitle}?`}</div>
          <div className='flex items-center justify-around'>
            <button
              className={clsx(
                "bg-red-300 text-slate-950",
                "transition hover:bg-slate-400",
                "flex items-center justify-center py-2 px-4",
                "rounded-lg cursor-pointer",
              )}
              autoFocus
              onClick={onCancel}
            >
              <ThumbsDownIcon />
            </button>
            <button
              className={clsx(
                "bg-green-300 text-slate-950",
                "transition hover:bg-slate-400",
                "flex items-center justify-center py-2 px-4",
                "rounded-lg cursor-pointer",
              )}
              onClick={onConfirm}
            >
              <ThumbsUpIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
