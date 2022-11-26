#!/usr/bin/env node
import React from "react";
import "../styles/global.css";
import Head from 'next/head';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function MyApp({ Component, pageProps }) {
  return (
    <main className={"font-dmSans relative"}>
      <Head>
        <title>Next CLI</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Store and Manage your expenses securely. Stop apps tracking your data. Your privacy matters"
        />
        <meta name="keywords" content="Expense, Money, Privacy, Secure" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}


export default MyApp;
