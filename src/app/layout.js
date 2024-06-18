import "./globals.css";
import { Oswald, Poppins } from "next/font/google";

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const oswald = Oswald({
  display: "swap",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

export const metadata = {
  title: "DAMAC",
  description: "landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${oswald.variable}`}>
        {children}
      </body>
    </html>
  );
}
