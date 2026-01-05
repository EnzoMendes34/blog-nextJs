import clsx from "clsx";

type ButtonVariants = "default" | "ghost" | "danger";
type ButtonSizes = "sm" | "md" | "lg";

type ButtonProps = {
  variant: ButtonVariants;
  size: ButtonSizes;
} & React.ComponentProps<"button">;

export function Button({
  variant = "default",
  size = "md",
  ...props
}: ButtonProps) {
  const buttonVariants: Record<ButtonVariants, string> = {
    default: clsx("bg-blue-600", "hover:bg-blue-700", "text-blue-100"),
    ghost: clsx("bg-slate-200", "hover:bg-slate-400", "text-slate-900"),
    danger: clsx("bg-red-600", "hover:bg-red-700", "text-red-100"),
  };
  const buttonSizes: Record<ButtonSizes, string> = {
    sm: clsx(
      "text-xs/tight",
      "py-1",
      "px-2",
      "[&_svg]:w-4",
      "[&_svg]:h-4",
      "gap-1",
    ),
    md: clsx(
      "text-base/tight",
      "py-2",
      "px-4",
      "[&_svg]:w-5",
      "[&_svg]:h-5",
      "gap-2",
    ),
    lg: clsx("text-lg/tight", "py-4", "px-6"),
  };

  const buttonClasses = clsx(
    buttonVariants[variant],
    buttonSizes[size],
    "rounded-sm",
    "flex",
    "items-center",
    "justify-center",
    "cursor-pointer",
    "transition",
    "disabled:text-slate-600",
    "disabled:cursor-not-allowed",
  );
  return <button className={buttonClasses} {...props} />;
}
