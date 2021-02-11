import SEO, { meta } from '../components/SEO'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SectionTitle from '../components/sectionTitle'
import Link from 'next/link'

export default function Page404() {
  const localMeta = { ...meta, title: 'Round English - Página não encontrada' }
  return (
    <Layout>
      <SEO meta={localMeta} />
      <div className="container">
        <div className="row mb-6">
          <div className="col-12 col-md-8 m-auto text-center">
            <SectionTitle title="Página não encontrada" />
            <FontAwesomeIcon
              icon={['fa', 'heart-broken']}
              size="8x"
              className="text-primary mb-5"
            />
            <p className="mb-5">
              Este site está sendo reconstruido. Se você procura algum dos
              nossos exercícios, muitos deles ainda não estão no ar. Eles
              voltarão em breve!
            </p>
            <Link href="/">
              <button className="btn btn-primary text-light shadow">
                Voltar para a Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
