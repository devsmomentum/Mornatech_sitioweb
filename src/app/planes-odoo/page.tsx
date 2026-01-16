import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import ShadowContent from "@/components/ShadowContent";
import fs from "fs";
import path from "path";

export default function PlanesOdooPage() {
  const htmlPath = path.join(process.cwd(), "public", "planes-odoo", "planes-odoo.html");
  let mainContent = "";
  let mapContent = "";

  try {
    const fullHtml = fs.readFileSync(htmlPath, "utf-8");

    // Extract main content - more flexible regex
    const mainMatch = fullHtml.match(/<main[^>]*id="main"[^>]*>([\s\S]*?)<\/main>/i);
    if (mainMatch) {
      mainContent = mainMatch[1];
    } else {
      // Fallback: try to get the elementor-9978 div directly if main tag match fails
      const elementorMatch = fullHtml.match(/<div[^>]*class="[^"]*elementor-9978[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/main>/i);
      if (elementorMatch) {
        mainContent = elementorMatch[0];
      }
    }

    // Extract the bottom section (Logo, Social, Form)
    // Looking for the specific elementor section ID 9b6a9c4
    const footerMatch = fullHtml.match(/<section[^>]*data-id="9b6a9c4"[^>]*>([\s\S]*?)<\/section>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/footer>/i);
    if (footerMatch) {
      mapContent = footerMatch[0];
    } else {
      // Very broad fallback for the map section if ID match fails
      const fallbackFooterMatch = fullHtml.match(/<section[^>]*class="[^"]*elementor-element-9b6a9c4[^"]*"[^>]*>([\s\S]*?)<\/section>/i);
      if (fallbackFooterMatch) {
        mapContent = fallbackFooterMatch[0];
      }
    }

  } catch (error) {
    console.error("Error reading planes-odoo.html:", error);
    mainContent = "<p>Error: Archivo de Planes Odoo no encontrado.</p>";
  }

  const stylesheets = [
    "/planes-odoo/css/style.min32c0.css",
    "/planes-odoo/css/classic-themes.min32c0.css",
    "/planes-odoo/css/style32c0.css",
    "/planes-odoo/css/main32c0.css",
    "/planes-odoo/css/frontend.mina25a.css",
    "/planes-odoo/css/flaticon32c0.css",
    "/planes-odoo/css/font-awesome.min1849.css",
    "/planes-odoo/css/buttons.min32c0.css",
    "/planes-odoo/css/app70cf.css",
    "/planes-odoo/css/dashicons.min32c0.css",
    "/planes-odoo/css/swipebox.min32c0.css"
  ];

  // Combine content
  let combinedHtml = mainContent + (mapContent ? `<div class="extra-map-section-wrapper">${mapContent}</div>` : "");

  combinedHtml = combinedHtml
    // Specific logo replacements first
    .replace(/src="img\/Logo-header-1\.png"/g, 'src="/planes-odoo/img/Logo-header2.png"')
    .replace(/src="02-Logo-header-1-300x120\.html"/g, 'src="/planes-odoo/img/Logo-header2.png"')
    .replace(/src="09-odoo_ready_partners_rgb-1024x512\.html"/g, 'src="https://morna.tech/assets/uploads/2024/09/odoo_ready_partners_rgb-1024x512.png"')
    // General path replacement
    .replace(/src="img\//g, 'src="/planes-odoo/img/')
    // Navigation fixes
    .replace(/href="index\.html"/g, 'href="/"')
    // Email replacement
    .replace(/contacto@morna\.tech/g, 'marketing@morna.tech');

  return (
    <div className="planes-odoo-page" style={{ background: '#2B1A40', minHeight: '100vh' }}>
      <Navbar />
      <style>{`
        /* Ocultar iconos de redes sociales no deseados en Planes Odoo */
        .extra-map-section-wrapper .elementor-social-icon-facebook,
        .extra-map-section-wrapper .elementor-social-icon-linkedin,
        .extra-map-section-wrapper .elementor-social-icon-twitter,
        .extra-map-section-wrapper .elementor-social-icon-x-twitter {
          display: none !important;
        }
      `}</style>
      <div className="planes-odoo-container" style={{ marginTop: '70px', background: '#2B1A40' }}>
        <ShadowContent html={combinedHtml} stylesheets={stylesheets} />
      </div>
      <WhatsAppButton />
    </div>
  );
}
