"use client";

import { uploadImageAction } from "@/actions/upload/upload-image-action";
import { Button } from "@/components/Button";
import { MAX_IMG_SIZE } from "@/lib/constants";
import { ImagePlusIcon } from "lucide-react";
import { useRef, useState, useTransition } from "react";
import { toast } from "react-toastify";

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startTransition] = useTransition();
  const [imgUrl, setImgUrl] = useState("");

  function handleClick() {
    if (!fileInputRef.current) {
      setImgUrl("");
      return;
    }

    fileInputRef.current.click();
  }

  function handleChange() {
    if (!fileInputRef.current) {
      setImgUrl("");
      return;
    }

    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0];

    if (!file) {
      setImgUrl("");
      return;
    }

    if (file.size > MAX_IMG_SIZE) {
      const readableMaxSize = MAX_IMG_SIZE / 1024;
      toast.error(`A imagem é grande demais. Máx: ${readableMaxSize}KB.`);

      fileInput.value = "";
      setImgUrl("");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    startTransition(async () => {
      const result = await uploadImageAction(formData);

      if (result.error) {
        toast.error(`Ocorreu um erro. ${result.error}`);
        fileInput.value = "";
        setImgUrl("");
        return;
      }

      setImgUrl(result.url);
      toast.info("Imagem enviada");
    });

    fileInput.value = "";
  }

  return (
    <>
      <div className='flex flex-col items-start gap-4'>
        <Button
          onClick={handleClick}
          size='md'
          type='button'
          variant='default'
          disabled={isUploading}
        >
          <ImagePlusIcon /> Upload de imagem
        </Button>

        {!!imgUrl && (
          <div className='flex flex-col gap4'>
            <p>URL: {imgUrl}</p>

            {/* eslint-disable-next-line */}
            <img className='rounded-lg' src={imgUrl} />
          </div>
        )}

        <input
          onChange={handleChange}
          ref={fileInputRef}
          className='hidden'
          name='file'
          type='file'
          accept='image/*'
          disabled={isUploading}
        />
      </div>
    </>
  );
}
