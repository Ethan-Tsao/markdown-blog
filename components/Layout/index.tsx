import React from "react";
import Head from "next/head";

interface Props {
  children: React.ReactNode;
  metadata: string;
}

const Layout = ({ children, metadata }: Props) => {
  return (
    <React.Fragment>
      <Head>
        <meta name="title" content={metadata} />
      </Head>
      {children}
    </React.Fragment>
  );
};

export default Layout;
