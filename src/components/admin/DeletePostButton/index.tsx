"use client";
import { deletePostAction } from "@/actions/post/delete-post-action";
import clsx from "clsx";
import { Trash2Icon } from "lucide-react";
import { useState, useTransition } from "react";
import { Dialog } from "../Dialog";
import { toast } from "react-toastify";

type DeleteButtonProps = {
  id: string;
  title: string;
};

export function DeletePostButton({ id, title }: DeleteButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [showDialog, setShowDialog] = useState(false);

  function handleClick() {
    setShowDialog(true);
  }

  function handleConfirm() {
    toast.dismiss();
    startTransition(async () => {
      const result = await deletePostAction(id);
      setShowDialog(false);

      if (result.error) {
        toast.error(result.error);
        return;
      }

      toast.info("Post apagado com sucesso");
    });
  }

  return (
    <>
      <button
        className={clsx(
          "text-red-500 rounded-sm transition",
          "cursor-pointer",
          "[&_svg]:w-4",
          "[&_svg]:h-4",
          "hover:scale-120 hover:text-red-600",
          "disabled:text-slate-600 disabled:cursor-not-allowed",
        )}
        aria-label={`Apagar post: ${title}`}
        title={`Apagar post: ${title}`}
        onClick={handleClick}
        disabled={isPending}
      >
        <Trash2Icon size={20} />
      </button>
      {showDialog && (
        <Dialog
          isVisible={showDialog}
          postTitle={title}
          onCancel={() => setShowDialog(false)}
          onConfirm={handleConfirm}
          disabled={isPending}
        />
      )}
    </>
  );
}
