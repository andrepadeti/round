import SEO, { meta } from '../components/SEO'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SectionTitle from '../components/sectionTitle'
import Link from 'next/link'

export default function Page404() {
  const localMeta = {
    ...meta,
    title: 'Round English - Página não encontrada',
    noIndex: true,
  }
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
              Este site está sendo reconstruido. Alguns exercícios estão em um
              link diferente agora. Veja a lista completa de exercícios clicando
              no botão abaixo.
            </p>
            <div class='d-flex justify-content-center gap-4 flex-wrap'>
              <Link href="/exercicios">
                <button className="btn btn-primary text-light shadow">
                  Exercícios
                </button>
              </Link>
              <Link href="/">
                <button className="btn btn-primary text-light shadow">
                  Voltar para a Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
