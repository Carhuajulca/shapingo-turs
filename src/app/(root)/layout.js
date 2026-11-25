import "../globals.css";
import GoogleTagManager from "@/components/GoogleTagManager";

export const metadata = {
  metadataBase: new URL("https://shapingotours.com"),
  title: { default: "Shapingo Turs | Tambopata tours and Amazon experiences", template: "%s | Shapingo Turs" },
  description: "Local tours through the rivers, lakes, and forests of Tambopata in the Peruvian Amazon.",
  icons: { icon: "/icon-512.png" },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" /></head><body>{children}<GoogleTagManager language="en" /></body></html>;
}
