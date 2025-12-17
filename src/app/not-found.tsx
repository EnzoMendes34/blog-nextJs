import ErrorMessage from "@/components/ErrorMessage";

export default function NotFoundPage() {
  return (
    <>
      <ErrorMessage
        pageTitle='Not Found | The blog'
        content='Erro 404 - Parece que a página que você tentou acessar não existe ou
            não está disponível'
        contentTitle='404'
      />
    </>
  );
}
