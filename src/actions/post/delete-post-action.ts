"use server";

import { verifyLoginSession } from "@/lib/login/manage-login";
import { postRepository } from "@/repositories/post";
import { revalidatePath } from "next/cache";

export async function deletePostAction(id: string) {
  //checar login
  const isAuthenticated = verifyLoginSession();

  if (!isAuthenticated) {
    return {
      error: "Faça login novamente em outra aba para deletar um post",
    };
  }

  if (!id || typeof id !== "string") {
    return {
      error: "Dados inválidos",
    };
  }

  let post;

  try {
    post = await postRepository.deleteById(id);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        error: e.message,
      };
    }

    return {
      error: "Error desconhecido",
    };
  }

  revalidatePath("/admin/post");
  revalidatePath(`/post/${post.slug}`);
  revalidatePath("/");

  return {
    error: "",
  };
}
