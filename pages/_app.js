import Head from 'next/head'
import { useRouter } from 'next/router';
import Header from '../components/global/Header'
import '../styles/main.scss'
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return <>
    {router.pathname !== "/404" && <Header />}
    <Head>
      <link rel="shortcut icon" href="favicon.ico" />
      <title>Saj | I am a web developer</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
