import type { Metadata, Viewport } from "next";
import Script from "next/script";
import TelegramProvider from "./telegram-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXUS — маркетплейс",
  description: "Маркетплейс NEXUS в Telegram Mini App",
  applicationName: "NEXUS Marketplace",
  appleWebApp: { capable: true, title: "NEXUS", statusBarStyle: "default" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f7f8fc",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
        <TelegramProvider>{children}</TelegramProvider>
      </body>
    </html>
  );
}
