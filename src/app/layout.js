import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Head from 'next/head';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movimiento Consciente | Micalela Céspedes",
  description: "Yoga con Micaela Céspedes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
        </body>
    </html>
  );
}
