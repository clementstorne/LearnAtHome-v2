import Header from "@/components/Header";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn@Home",
  description:
    "Trouvez le soutien scolaire dont votre enfant a besoin avec Learn@Home. Notre association connecte des enfants en difficulté scolaire à des tuteurs bénévoles, offrant un accès à un soutien scolaire à distance accessible à tous les élèves, peu importe leur emplacement. Investissons dans l'éducation, où que vous soyez.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${montserrat.className} bg-white pt-48 px-8`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
