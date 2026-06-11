import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://karolainesorrechioadv.com.br/";
const siteName = "Karolaine Sorrechio Advocacia";
const siteDescription =
  "Advocacia com excelência em Paiçandu/PR e Maringa/PR. Atendimento jurídico personalizado nas áreas de Direito Civil, Previdenciário, Empresarial e Trabalhista. Atendimento nacional.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "advogada Paiçandu",
    "advogada Maringa",
    "advocacia Paiçandu",
    "advocacia Maringa",
    "advogada Criminal Maringa",
    "direito civil Maringa",
    "direito civil Paiçandu",
    "direito consumidor Maringa",
    "direito consumidor Paiçandu",
    "direito imobiliário  Maringa",
    "direito imobiliário  Paiçandu",
    "direito Criminal Maringa",
    "direito Criminal Paiçandu",
    "direito Familiar Maringa",
    "direito Familiar Paiçandu",
    "Karolaine Sorrechio",
    "advogada OAB Paraná",
    "advogada OAB Maringa",
    "advogada OAB Paiçandu",
    "consultoria jurídica",
    "atendimento nacional",
  ],
  authors: [{ name: "Karolaine Sorrechio", url: siteUrl }],
  creator: "Karolaine Sorrechio",
  publisher: siteName,

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Karolaine Sorrechio Advocacia — Estratégia jurídica que protege o que realmente importa.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
