import Footer from "../components/Footer";
import "./globals.css";
import { Poppins } from "next/font/google";

import Notifications from "../components/Notifications";
import Navbar from "../components/Navbar";
import { ReduxProvider } from "../store/provider";
import Providers from "../components/Providers";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "CropCog",
  description: "Seed To Mouth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ReduxProvider>
            <Notifications />
            <Navbar />
            {children}
            <Footer />
          </ReduxProvider>
        </Providers>
      </body>
    </html>
  );
}
