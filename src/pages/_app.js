import "@/styles/globals.css";
import Head from "next/head";
import { Poppins } from 'next/font/google';
import ScrollUp from "@/components/ScrollUp";
import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Script from "next/script";

const poppins = Poppins({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Body class for specific route
  useEffect(() => {
    if (router.pathname === "/duo-agency-registration" || router.pathname === "/boloup-agency-registration" || router.pathname === "/crush-agency-registration") {
      document.body.classList.add("no-header");
    } else {
      document.body.classList.remove("no-header");
    }
  }, [router.pathname]);

  // SPA route change tracking for GA/GTM
  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     if (typeof window.gtag !== "undefined") {
  //       window.gtag('config', 'G-YTEVWCKCZE', { page_path: url });
  //     }
  //   };
  //   router.events.on('routeChangeComplete', handleRouteChange);
  //   return () => router.events.off('routeChangeComplete', handleRouteChange);
  // }, [router.events]);

  return (
    <>
      <Head>
        <style jsx global>{`
          html, body {
            font-family: ${poppins.style.fontFamily};
          }
        `}</style>
      </Head>

      <ScrollUp />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
