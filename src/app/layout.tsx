import "@/app/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ToastifyContainer } from "@/components/ToastifyContainer";

export const metadata: Metadata = {
  title: {
    template: "%s | The blog",
    default: "The blog",
  },
  description: "Descrição The Blog",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang='pt-BR'>
      <body>
        <Container>
          <Header />

          {children}

          <Footer />
        </Container>
        <ToastifyContainer />
      </body>
    </html>
  );
}
