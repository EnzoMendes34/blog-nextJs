"use server";

import { postRepository } from "@/repositories/post";
import { revalidatePath, revalidateTag } from "next/cache";

export async function deletePostAction(id: string) {
  //checar login

  //checking post Id

  if (!id || typeof id !== "string") {
    return {
      error: "Dados inválidos",
    };
  }

  const post = await postRepository.findById(id).catch(() => undefined);

  if (!post) {
    return {
      error: "Post não encontrado.",
    };
  }

  postRepository.deleteById(id);

  revalidatePath("/admin/post");
  revalidatePath(`/post/${post.slug}`);
  revalidatePath("/");

  return {
    error: "",
  };
}
