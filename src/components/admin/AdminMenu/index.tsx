"use client";

import clsx from "clsx";
import {
  CircleXIcon,
  FileTextIcon,
  HouseIcon,
  MenuIcon,
  PlusIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function AdminMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenuInChangingPage() {
    setIsOpen(false);
  }

  const navClasses = clsx(
    "bg-slate-900 text-slate-100 rounded-lg",
    "flex flex-col",
    "mb-8",
    "sm:flex-row sm:flex-wrap",
    !isOpen && "overflow-hidden",
    !isOpen && "h-10",
    "sm:overflow-visible sm:h-auto",
  );
  const linkClasses = clsx(
    "[&>svg]:w-4 [&>svg]:h-4 px-4 flex items-center justify-start",
    "transition hover:bg-slate-700 gap-2",
    "h-10 shrink-0 rounded-lg",
    "cursor-pointer",
  );

  const openCloseBtnClasses = clsx(
    linkClasses,
    "text-blue-200 italic",
    "sm:hidden",
  );

  return (
    <>
      <nav className={navClasses}>
        <button
          onClick={() => setIsOpen(s => !s)}
          className={openCloseBtnClasses}
        >
          {!isOpen && (
            <>
              <MenuIcon />
              Menu
            </>
          )}

          {isOpen && (
            <>
              <CircleXIcon /> Fechar
            </>
          )}
        </button>
        <a
          onClick={closeMenuInChangingPage}
          className={linkClasses}
          href='/'
          target='_blank'
        >
          <HouseIcon />
          Home
        </a>

        <Link
          onClick={closeMenuInChangingPage}
          className={linkClasses}
          href='/admin/post'
        >
          <FileTextIcon /> Posts
        </Link>

        <Link
          onClick={closeMenuInChangingPage}
          className={linkClasses}
          href='/admin/post/new'
        >
          <PlusIcon /> Criar novo post
        </Link>
      </nav>
    </>
  );
}
