"use client";

import { logoutAction } from "@/actions/login/logout-action";
import clsx from "clsx";
import {
  CircleXIcon,
  FileTextIcon,
  HourglassIcon,
  HouseIcon,
  LogOutIcon,
  MenuIcon,
  PlusIcon,
} from "lucide-react";
import Link from "next/link";
import { useState, useTransition } from "react";

export function AdminMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const [isPending, startTransition] = useTransition();

  function handleLogout(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();

    startTransition(async () => {
      await logoutAction();
    });
  }

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

        <a href='#' onClick={handleLogout} className={linkClasses}>
          {isPending && (
            <>
              <HourglassIcon /> Aguarde...
            </>
          )}

          {!isPending && (
            <>
              <LogOutIcon /> Sair
            </>
          )}
        </a>
      </nav>
    </>
  );
}
