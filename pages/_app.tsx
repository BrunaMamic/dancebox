import "../styles/index.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Component {...pageProps} />;
  <Analytics />
  </>
}

export default MyApp;
