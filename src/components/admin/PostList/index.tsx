import { findAllPostsAdmin } from "@/lib/post/queries/admin";
import clsx from "clsx";
import { Metadata } from "next";
import Link from "next/link";
import { DeletePostButton } from "../DeletePostButton";
import ErrorMessage from "@/components/ErrorMessage";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Post Admin",
};

export default async function AdminPostList() {
  const posts = await findAllPostsAdmin();

  if (posts.length <= 0)
    return <ErrorMessage contentTitle='Opa.' content='Nenhum post criado' />;

  return (
    <>
      <div className='mb-16'>
        {posts.map(post => {
          return (
            <div
              className={clsx(
                "py-2 px-2",
                !post.published && "bg-slate-400",
                "flex gap-2",
                "items-center justify-between",
              )}
              key={post.id}
            >
              <Link href={`/admin/post/${post.id}`}>{post.title}</Link>

              {!post.published && (
                <span className='text-sm text-slate-600 italic '>
                  (Post não publicado)
                </span>
              )}

              <DeletePostButton id={post.id} title={post.title} />
            </div>
          );
        })}
      </div>
    </>
  );
}
