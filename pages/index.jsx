import SEO, { meta } from '../components/SEO'
import Contact from '../components/contact'
import Cursos from '../components/cursos'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Profile from '../components/profile'

export default function Home() {
  return (
    <Layout page="home" theme={'white'}>
      <SEO meta={meta} />
      <div className="container">
        <Hero />
        <Cursos />
        <Profile />
        <Contact />
      </div>
    </Layout>
  )
}
