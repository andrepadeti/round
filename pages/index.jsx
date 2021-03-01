import SEO, { meta } from '../components/SEO'
import Contact from '../components/contact'
import Cursos from '../components/cursos'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Profile from '../components/profile'

export default function Home() {
  const isProduction = process.env.NODE_ENV === 'production'

  return (
    <Layout page="home" theme={'white'}>
      <SEO meta={meta} />
      <Hero />
      <div className="container-main">
        <Cursos />
        <Profile />
        <Contact />
      </div>
    </Layout>
  )
}
