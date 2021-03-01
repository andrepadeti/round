import { useEffect } from 'react'
import { useRouter } from 'next/router'
import 'styles/global.scss'
import * as gtag from 'src/gtag'

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  const isProduction = process.env.NODE_ENV === 'production'

  useEffect(() => {
    if (isProduction) {
      const handleRouteChange = url => {
        gtag.pageview(url)
      }
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default App
