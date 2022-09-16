import Head from "next/head";
import React from "react";

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle ? pageTitle : "Wellcome to our system"}</title>
      </Head>
      <main>
       {children}
      </main>
    </>
  );
}
