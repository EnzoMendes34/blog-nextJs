import { AdminMenu } from "@/components/admin/AdminMenu";

type AdminPostLayoutProps = {
  children: React.ReactNode;
};

export default function AdminPostLayout({
  children,
}: Readonly<AdminPostLayoutProps>) {
  return (
    <>
      <AdminMenu />
      {children}
    </>
  );
}
