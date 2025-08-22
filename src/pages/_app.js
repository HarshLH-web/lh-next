import "@/styles/globals.css";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import Head from "next/head";
import { Poppins } from 'next/font/google';
import ScrollUp from "@/components/ScrollUp";
// import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { useRouter } from "next/router";
import { useEffect } from "react";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Add needed font weights
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/duo-agency-registration") {
      document.body.classList.add("no-header");
    } else {
      document.body.classList.remove("no-header");
    }
  }, [router.pathname]);

  return <>
    <Head>
    {/* <link rel="icon" href="/favicon.ico" type="image/x-icon" /> */}

      <style jsx global>{`
        html, body {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
    </Head>
    <ScrollUp />
    <Component {...pageProps} />
    {/* <SpeedInsights /> */}
    <Analytics />
  </>;
}
