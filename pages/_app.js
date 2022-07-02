import Header from '../components/global/Header'
import '../styles/main.scss'
function MyApp({ Component, pageProps }) {
  return <>
    <Header />
    <Component {...pageProps} />
  </>
}

export default MyApp
