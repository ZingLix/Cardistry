
import PageLayout from '../components/layouts/layout'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import "../styles/antd.less"

function MyApp({ Component, pageProps }: AppProps) {
  return <PageLayout><Component {...pageProps} /></PageLayout>
}

export default MyApp
