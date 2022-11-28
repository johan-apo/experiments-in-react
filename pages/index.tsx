import Script from "next/script";

export default function Home() {
  return (
    <main>
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
      <p>Hello</p>
    </main>
  );
}
