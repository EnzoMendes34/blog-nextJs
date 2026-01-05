import clsx from "clsx";
import Link from "next/link";

export function Header() {
  return (
    <>
      <header>
        <h1
          className={clsx(
            "text-4xl/relaxed font-extrabold py-8",
            "sm:text-6xl/relaxed sm:py-10",
            "md:text-8xl/relaxed md:py-11",
            "lg:text-10xl/relaxed lg:py-12",
          )}
        >
          <Link href='/'>The Blog</Link>
        </h1>
      </header>
    </>
  );
}
