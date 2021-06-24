/* eslint-disable */
import "../styles/globals.scss";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

const tagManagerArgs = {
  gtmId: "GTM-5PVX3VG",
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Component Did Mount
    TagManager.initialize(tagManagerArgs);

    // Component Did unMount
    return () => {};
  });
  return <Component {...pageProps} />;
}

export default MyApp;
