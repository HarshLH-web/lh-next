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

  
  useEffect(() => {
    // 1️⃣ Disable Right-Click
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // 2️⃣ Block Key Shortcuts (Inspect, View Source, etc.)
    const blockedKeys = new Set(["F12", "i", "j", "u", "I", "U", "J"]);
    const handleKeyDown = (e) => {
      if (
        blockedKeys.has(e.key) &&
        (e.ctrlKey || e.shiftKey)
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // 3️⃣ Disable Text Selection + Copy + Cut + Paste
    const disableSelect = () => false;
    document.addEventListener("selectstart", disableSelect);
    document.addEventListener("copy", disableSelect);
    document.addEventListener("cut", disableSelect);
    document.addEventListener("paste", disableSelect);

    // 4️⃣ Disable Dragging Images / Elements
    const disableDrag = (e) => e.preventDefault();
    document.addEventListener("dragstart", disableDrag);

    // 5️⃣ Blur UI if DevTools is Open (simple detection)
    let devToolsOpen = false;
    const interval = setInterval(() => {
      const threshold = 160; // height difference check
      if (
        window.outerHeight - window.innerHeight > threshold ||
        window.outerWidth - window.innerWidth > threshold
      ) {
        if (!devToolsOpen) {
          devToolsOpen = true;
          document.body.style.filter = "blur(8px)";
          alert("Developer tools are disabled on this site!");
        }
      } else {
        if (devToolsOpen) {
          devToolsOpen = false;
          document.body.style.filter = "none";
        }
      }
    }, 1000);

    // 6️⃣ Console Protection — Prevent Logs
    const disableConsole = () => {};
    console.log = disableConsole;
    console.warn = disableConsole;
    console.error = disableConsole;

    // Cleanup events
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("selectstart", disableSelect);
      document.removeEventListener("copy", disableSelect);
      document.removeEventListener("cut", disableSelect);
      document.removeEventListener("paste", disableSelect);
      document.removeEventListener("dragstart", disableDrag);
      clearInterval(interval);
    };
  }, []);

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
