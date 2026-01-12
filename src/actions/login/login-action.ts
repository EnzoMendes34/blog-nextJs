"use server";

import { createLoginSession, verifyPassword } from "@/lib/login/manage-login";
import { redirect } from "next/navigation";

type LoginActionState = {
  username: string;
  error: string;
};

export async function loginAction(state: LoginActionState, formData: FormData) {
  if (!(formData instanceof FormData)) {
    return {
      username: "",
      error: "Dados inválidos",
    };
  }

  const userName = formData.get("username")?.toString().trim() || "";
  const password = formData.get("password")?.toString() || "";

  if (!password || !userName) {
    return {
      username: userName,
      error: "Dados inválidos, digite o usuário e a senha",
    };
  }

  const isUserNameValid = userName === process.env.LOGIN_USER;
  const isPasswordValid = await verifyPassword(
    password,
    process.env.LOGIN_PASS || "",
  );

  if (!isUserNameValid && !isPasswordValid) {
    return {
      username: userName,
      error: "Usuário ou senha inválidos",
    };
  }

  await createLoginSession(userName);
  redirect("/admin/post");
}
