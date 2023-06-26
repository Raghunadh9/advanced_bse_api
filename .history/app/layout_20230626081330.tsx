import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { Header } from "@/components";
const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({ weight: "400", subsets: ["devanagari"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        {children}
      </body>
    </html>
  );
}
