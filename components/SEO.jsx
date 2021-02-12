import Head from 'next/head'

export const meta = {
  title: 'Round English',
  description:
    'Aulas de inglês personalizadas. Estude com um professor com mais de 20 anos de experiência e com certificação pela Universidade de Cambridge.',
  image: '/images/hero.jpg',
  url: 'https://roundenglish.com.br',
  siteName: 'Round English',
  twCard: 'summary_large_image',
  twSite: '@RoundEnglish',
  twImageAlt: 'Round English',
  fbAppId: '474625173557832',
  noIndex: false,
  noFollow: false,
}

const SEO = ({ meta }) => {
  return (
    <Head>
      <meta
        name="robots"
        content={`${meta.noIndex ? 'noindex' : 'index'},${
          meta.noFollow ? 'nofollow' : 'follow'
        }`}
      />

      <link rel="icon" href="/favicon.ico" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta name="description" content={meta.description} key="description" />
      <meta property="og:title" content={meta.title} key="ogtitle" />
      <meta
        property="og:description"
        content={meta.description}
        key="ogdescription"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={`https://roundenglish.com.br${meta.image}`}
        key="ogimage"
      />
      <meta property="og:url" content={meta.url} key="ogurl" />
      <meta property="og:site_name" content={meta.siteName} key="ogsitename" />
      <meta name="twitter:card" content={meta.twCard} key="twcard" />
      <meta
        name="twitter:image:alt"
        content={meta.twImageAlt}
        key="twimagealt"
      />
      <meta property="fb:app_id" content={meta.fbAppId} key="fbappid" />
      <meta name="twitter:site" content={meta.twSite} key="twsite" />
      <title>{meta.title}</title>
    </Head>
  )
}

export default SEO
