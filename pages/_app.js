import { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/800.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    smoothscroll.polyfill();
  });
  return <Component {...pageProps} />;
}

export default MyApp;
