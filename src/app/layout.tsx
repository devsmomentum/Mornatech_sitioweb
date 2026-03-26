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
        {/* Preconnect para mejorar velocidad de carga de recursos externos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        {/* Preconnect al servidor de imágenes para reducir latencia DNS/TLS */}
        <link rel="preconnect" href="https://morna.tech" />
        <link rel="dns-prefetch" href="https://morna.tech" />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={outfit.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
