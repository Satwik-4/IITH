// pages/_app.js
import React from 'react';
import Head from 'next/head';
import '../styles/globals.css'; // Import global styles if you have any

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/IITH.ico" />
        {/* Add other meta tags or links as needed */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
