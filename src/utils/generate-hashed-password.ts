import { hashPassword } from "@/lib/login/manage-login";

export async function generateHashedPassword(password: string) {
  const hashedPassword = await hashPassword(password);
}
