import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planes Odoo | Morna Tech",
  description: "Soluciones ERP para impulsar tu negocio con Odoo y Morna Tech.",
};

export default function PlanesOdooLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="planes-odoo-layout">
      {/* 
          CLEAN SLATE: We removed all global protective styles and links.
          Style isolation is now handled by ShadowContent component in page.tsx
      */}
      {children}
    </div>
  );
}
