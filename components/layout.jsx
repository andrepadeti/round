import Head from 'next/head'

import Navigation from './navbar'

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
    </>
  )
}
