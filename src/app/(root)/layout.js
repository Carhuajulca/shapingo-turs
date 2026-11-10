import "../globals.css";

export const metadata = {
  metadataBase: new URL("https://shapingoturs.com"),
  title: { default: "Shapingo Turs | Experiencias en Tambopata", template: "%s | Shapingo Turs" },
  description: "Experiencias locales en los ríos, lagos y bosques de Tambopata, Madre de Dios, Perú.",
  icons: { icon: "/icon-512.png" },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return <html lang="es"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,500&display=swap" rel="stylesheet" /></head><body>{children}</body></html>;
}
