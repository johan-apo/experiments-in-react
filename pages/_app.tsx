import "../styles/globals.css";
import type { AppProps } from "next/app";
import ReactGA from "react-ga";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { MantineProvider } from "@mantine/core";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    ReactGA.initialize("G-FTN0MS7BB0");
    ReactGA.pageview(window.location.pathname + window.location.search);
    router.events.on("routeChangeComplete", () => console.log("Changed!"));
    return () => router.events.off("routeChangeStart", () => console.log("Yo"));
  }, []);

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-FTN0MS7BB0"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FTN0MS7BB0');
        `}
      </Script>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  );
}
