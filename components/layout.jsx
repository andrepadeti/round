import Head from 'next/head'
import Footer from './footer'
import Navigation from './navbar'

// begin font awesome initialization
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faHeartBroken,
  faEnvelope,
  faBuilding,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
library.add(faHeartBroken, faEnvelope, faBuilding, faPhone, fab)
// end font awesome initialization

const name = 'PadetiIT'
export const siteTitle = 'Round English'

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Essential META Tags */}
        <meta property="og:title" content="Round English" />
        <meta property="og:description" content="Inglês para toda a vida." />
        <meta property="og:image" content="http://..." />
        <meta property="og:url" content="http://..." />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Non-Essential, But Recommended */}
        <meta property="og:site_name" content="Round English" />
        <meta name="twitter:image:alt" content="Round English" />
        {/* Non-Essential, But Required for Analytics */}
        <meta property="fb:app_id" content="your_app_id" />
        <meta name="twitter:site" content="@RoundEnglish" />
      </Head>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}
