import clsx from "clsx";

export default function NotFoundPage() {
  return (
    <>
      <div
        className={clsx(
          "mb-16",
          "bg-slate-900",
          "min-h-80",
          "p-8",
          "text-slate-100",
          "rounded-xl",
          "flex",
          "items-center",
          "justify-center text-center",
          "mx-1.5",
        )}
      >
        <div>
          <h1 className='mb-4 font-extrabold text-8xl/normal'>404</h1>
          <p className='font-bold text-2xl'>
            Erro 404 - Parece que a página que você tentou acessar não existe ou
            não está disponível
          </p>
        </div>
      </div>
    </>
  );
}
