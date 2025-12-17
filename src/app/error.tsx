"use client";

import ErrorMessage from "@/components/ErrorMessage";

export default function RootErrorPage() {
  return (
    <ErrorMessage
      pageTitle='Internal server error'
      contentTitle='501'
      content='Ocorreu um erro do qual não conseguimos nos recuperar, tente novamente mais tarde.'
    />
  );
}
