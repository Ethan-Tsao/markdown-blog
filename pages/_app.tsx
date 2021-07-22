import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme";
import { AppProps } from "next/app";
import { useEffect } from "react";
import "@fontsource/lato/400.css";
import "@fontsource/rubik/400.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
