import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thank You - Trades with Algo",
  description: "Trades with Algo",
  alternates: {
    canonical: "https://brainautotech.com/thankyou/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
