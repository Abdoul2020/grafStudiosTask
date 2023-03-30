import Head from "next/head";
import React, { useEffect } from "react";
import { useRouter } from "next/router";



function GlobalLayout({ children }) {

  return (
    <>
      <Head>
        <title> Graf-Studios / Task </title>
        <meta name="description" content="Hibirt Card - HibritMedia" />
        <link rel="icon" href="/hibri.jpg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>

      <div> {children} </div>
      

    </>
  );
}

export default GlobalLayout;
