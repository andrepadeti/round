import Head from 'next/head'
import Cursos from '../components/cursos'
import Hero from '../components/hero'
import Layout, { siteTitle } from '../components/layout'
import Profile from '../components/profile'
import utilStyles from '../styles/utils.module.sass'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="container">
        <Hero />
        <Cursos />
        <Profile />
      </div>
    </Layout>
  )
}
