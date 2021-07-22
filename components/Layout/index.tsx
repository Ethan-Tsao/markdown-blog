import React from "react";
import Head from "next/head";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { Navbar } from "components/Navbar";

interface Props {
  children: React.ReactNode;
  metadata: string;
}

const Layout = ({ children, metadata }: Props) => {
  const mode = useColorModeValue("solarizedDark.600", "solarizedLight.500");
  return (
    <React.Fragment>
      <Head>
        <meta name="title" content={metadata} />
        <title>{metadata}</title>
      </Head>
      <Box
        maxW={{ base: "90%", lg: "65%" }}
        mx="auto"
        px={{ base: "6", lg: "8" }}
        align="center"
        color={mode}
      >
        <Navbar />
        {children}
      </Box>
    </React.Fragment>
  );
};

export default Layout;
