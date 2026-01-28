import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Morna Tech | La Revolución de la atención al Cliente con IA",
  description: "SuperAPI mejora la atención al cliente en WhatsApp con inteligencia artificial ofreciendo interacciones fluidas que elevan la experiencia del usuario y aseguran el éxito empresarial.",
  keywords: ["Morna Tech", "SuperAPI", "IA", "WhatsApp", "Odoo", "CRM", "Chatbot", "Inteligencia Artificial"],
  authors: [{ name: "Morna Tech" }],
  openGraph: {
    title: "Morna Tech | La Revolución de la atención al Cliente con IA",
    description: "SuperAPI mejora la atención al cliente en WhatsApp con inteligencia artificial.",
    type: "website",
    images: ["https://morna.tech/wp-content/uploads/2024/05/cropped-Perfil.png"],
  },
  icons: {
    icon: "https://morna.tech/wp-content/uploads/2024/05/cropped-Perfil.png",
    shortcut: "https://morna.tech/wp-content/uploads/2024/05/cropped-Perfil.png",
    apple: "https://morna.tech/wp-content/uploads/2024/05/cropped-Perfil.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700;800;900&family=Montserrat:wght@400;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className={outfit.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
