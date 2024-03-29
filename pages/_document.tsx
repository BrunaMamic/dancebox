import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class extends Document {
  render(): JSX.Element {
    return (
      <Html className="">
        <meta name="viewport" content="width=device-width, user-scalable=yes" />
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="" />
        </Head>
        <title>DANCEBOX | Plesni studio DanceBox Split</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />

        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
        />

        <link
           rel="stylesheet" 
           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
