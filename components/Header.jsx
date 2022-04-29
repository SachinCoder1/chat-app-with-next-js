import Head from 'next/head';
import React from 'react'

const Header = ({title}) => {
  return (
    <Head>
      <title>{title} - Chat App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default Header