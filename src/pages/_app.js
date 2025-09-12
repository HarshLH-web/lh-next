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
    if (router.pathname === "/duo-agency-registration" || router.pathname === "/boloup-agency-registration") {
      document.body.classList.add("no-header");
    } else {
      document.body.classList.remove("no-header");
    }
  }, [router.pathname]);

  // SPA route change tracking for GA/GTM
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (typeof window.gtag !== "undefined") {
        window.gtag('config', 'G-YTEVWCKCZE', { page_path: url });
      }
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return (
    <>
      <Head>
        <style jsx global>{`
          html, body {
            font-family: ${poppins.style.fontFamily};
          }
        `}</style>
      </Head>

      {/* Google Tag Manager */}
      {/* <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TJ2TZ9C5');
          `,
        }}
      /> */}

      {/* Google Analytics */}
      {/* <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-YTEVWCKCZE"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YTEVWCKCZE');
          `,
        }}
      /> */}

      <ScrollUp />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
