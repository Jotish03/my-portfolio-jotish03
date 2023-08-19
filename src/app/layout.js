import "./globals.css";
import "./portfolio.css";

import { Inter } from "next/font/google";
<script src="https://www.google.com/recaptcha/api.js?render=6LeBUrsnAAAAAAVCcFP1mYLrBNz1XtNSSJvTN-Jb"></script>;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jotish Porfolio",
  description: "Innovation. Design. Technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
