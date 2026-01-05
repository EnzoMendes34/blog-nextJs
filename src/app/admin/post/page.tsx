import AdminPostList from "@/components/admin/PostList";
import { SpinLoader } from "@/components/SpinLoader";
import { findAllPostsAdmin } from "@/lib/post/queries/admin";
import { Metadata } from "next";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Post Admin",
};

export default async function AdminPostPage() {
  return (
    <>
      <Suspense fallback={<SpinLoader className='mb-16' />}>
        <AdminPostList />
      </Suspense>
    </>
  );
}
