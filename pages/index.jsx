import Head from 'next/head'
import Cursos from '../components/cursos'
import Hero from '../components/hero'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.sass'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <Hero />
          </div>
        </div>
        <div className="row my-5">
          <div className="col">
            <Cursos />
          </div>
        </div>
      </div>
    </Layout>
  )
}
