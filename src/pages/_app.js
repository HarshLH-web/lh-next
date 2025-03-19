import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Add needed font weights
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <style jsx global>{`
        html, body {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
    </Head>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>;
}
