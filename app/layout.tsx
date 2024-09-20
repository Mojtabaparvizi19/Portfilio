import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import NavBar from "./components/navbar/NavBar";
import styles from "./layout.module.css";
import SmallNav from "./components/smallNavbar/SmallNav";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kyle, Parvizi",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="business">
      <body className={poppins.className}>
        <div className={styles.div}>
          <div>
            <h1 className={styles.font}>Kyle Parvizi</h1>
          </div>
          <NavBar />
        </div>
        <div>
          <SmallNav />
        </div>
        {children}
      </body>
    </html>
  );
}
