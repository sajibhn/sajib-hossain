import { useRouter } from 'next/router';
import Header from '../components/global/Header'
import '../styles/main.scss'
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return <>
    {router.pathname !== "/404" && <Header />}
    <Component {...pageProps} />
  </>
}

export default MyApp
