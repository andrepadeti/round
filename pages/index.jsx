import Head from 'next/head'
import Contact from '../components/contact'
import Cursos from '../components/cursos'
import Hero from '../components/hero'
import Layout, { siteTitle } from '../components/layout'
import Profile from '../components/profile'

export default function Home() {
  return (
    <Layout page="home">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="container">
        <Hero />
        <Cursos />
        <Profile />
        <Contact />
      </div>
    </Layout>
  )
}
