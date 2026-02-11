import { Geist, Geist_Mono, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const dk_frong_prince = localFont({
  src: "../public/fonts/dk_prince_frog/font.otf",
  variable: "--font-my-custom",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Lynbrook Robotics Club - The Funky Monkeys",
  description:
    "The official website of the Lynbrook Robotics Club - The Funky Monkeys",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dk_frong_prince.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
