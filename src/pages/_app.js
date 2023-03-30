import '../styles/globals.scss'
import Head from "next/head";
import GlobalLayout from "../layout/global-layout";


export default function App({ Component, pageProps }) {



return (
  <>

<Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale = 1.0,"
        />
        <title>Graf-Studios / Task</title>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </Head>

      <GlobalLayout>

      <Component {...pageProps} />

      </GlobalLayout>

  </>
)


}
