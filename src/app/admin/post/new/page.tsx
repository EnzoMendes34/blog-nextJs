import { ManagePostForm } from "@/components/admin/ManagePostForm";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Criar post",
};

export default async function AdminPostNewPage() {
  return (
    <>
      <div className='flex flex-col gap-6'>
        <ManagePostForm mode='create' />
      </div>
    </>
  );
}
