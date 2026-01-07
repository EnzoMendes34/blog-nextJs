import { isUrlOrRelativePath } from "@/utils/is-url-or-relative-path";
import { except } from "drizzle-orm/gel-core";
import sanitizeHtml from "sanitize-html";
import { z } from "zod";

const PostBaseSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "O título deve ter no mínimo 3 caracteres")
    .max(120, "O título deve ter no máximo 120 caracteres"),
  content: z
    .string()
    .trim()
    .min(3, "O conteúdo é obrigatório")
    .transform(val => sanitizeHtml(val)),
  author: z
    .string()
    .trim()
    .min(4, "Autor precisa ter no mínimo 4 letras")
    .max(100, "Nome do autor não pode ultrapassar 100 caracteres"),
  excerpt: z
    .string()
    .trim()
    .min(3, "Excerto precisa de no mínimo 3 caracteres")
    .max(200, "Excerto não pode ultrapassar 200 caracteres"),
  coverImageUrl: z.string().trim().refine(isUrlOrRelativePath, {
    message: "URL da capa deve ser uma URL caminho para a imagem.",
  }),
  published: z
    .union([
      z.literal("on"),
      z.literal("true"),
      z.literal("false"),
      z.literal(true),
      z.literal(false),
      z.literal(null),
      z.literal(undefined),
    ])
    .default(false)
    .transform(val => val === "on" || val === "true" || val === true),
});

export const PostCreateSchema = PostBaseSchema;

export const PostUpdateSchema = PostBaseSchema.extend({});
