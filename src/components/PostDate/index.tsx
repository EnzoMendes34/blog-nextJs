import clsx from "clsx";

type PostDateProps = {
  createdAt: string;
  styles?: string;
  children: React.ReactNode;
};

export function PostDate({ children, createdAt, styles }: PostDateProps) {
  return (
    <>
      <time
        className={clsx("text-slate-600 text-sm/tight", {
          styles,
        })}
        dateTime={createdAt}
      >
        {children}
      </time>
    </>
  );
}
