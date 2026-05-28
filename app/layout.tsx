import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WooCommerce Abandoned Checkout Analyzer",
  description: "Analyze why customers abandon WooCommerce checkouts. Track abandonment points, form field interactions, and error patterns to boost conversions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="da8f83db-4692-482c-8bf7-eaf0e441cfd6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
