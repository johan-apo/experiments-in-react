import "../styles/globals.css";
import type { AppProps } from "next/app";
import ReactGA from "react-ga";

ReactGA.initialize("G-FTN0MS7BB0");
ReactGA.pageview(window.location.pathname + window.location.search);
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
