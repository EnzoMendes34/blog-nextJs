"use server";

import {
  IMAGE_SERVER_URL,
  IMAGE_UPLOAD_DIRECTORY,
  MAX_IMG_SIZE,
} from "@/lib/constants";
import { verifyLoginSession } from "@/lib/login/manage-login";
import { mkdir, writeFile } from "fs/promises";
import { extname, resolve } from "path";

type UploadImageActionResult = {
  url: string;
  error: string;
};

export async function uploadImageAction(
  formData: FormData,
): Promise<UploadImageActionResult> {
  const makeResult = ({ url = "", error = "" }) => ({ url, error });

  const isAuthenticated = verifyLoginSession();

  if (!isAuthenticated) {
    return makeResult({ error: "Faça login novamente para continuar." });
  }

  if (!(formData instanceof FormData)) {
    return makeResult({ error: "Dados inválidos" });
  }

  const file = formData.get("file");

  if (!(file instanceof File)) {
    return makeResult({ error: "Arquivo inválido" });
  }

  if (file.size > MAX_IMG_SIZE) {
    return makeResult({ error: "Arquivo inválido" });
  }

  if (!file.type.startsWith("image/")) {
    return makeResult({ error: "Arquivo inválido" });
  }

  const imgExtension = extname(file.name);
  const uniqueImageName = `${Date.now()}${imgExtension}`;

  const uploadFullPath = resolve(
    process.cwd(),
    "public",
    IMAGE_UPLOAD_DIRECTORY,
  );
  await mkdir(uploadFullPath, { recursive: true });

  const fileArrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(fileArrayBuffer);

  const fileFullPath = resolve(uploadFullPath, uniqueImageName);

  await writeFile(fileFullPath, buffer);

  const url = `${IMAGE_SERVER_URL}/${uniqueImageName}`;

  return makeResult({ url });
}
