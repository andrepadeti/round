import SEO, { meta } from '../../components/SEO'
import Layout from '../../components/layout'
import Image from 'next/image'
import Link from 'next/link'

const IndexOfExercises = () => {
  // meta tags
  const localMeta = {
    ...meta,
    title: 'Round English - Lista de Exercícios',
    description:
      'Uma coleção de exercícios para você já ir começando a praticar o seu inglês.',
    image: '/images/general.jpg',
    url: 'www.roundenglish.com.br/exercicios/index',
  }

  return (
    <Layout page="exercises">
      <SEO meta={localMeta} />
      <div className="container">
        <div className="row justify-content-center align-items-center my-5">
          <div className="col-12 col-md-6 text-center text-md-start">
            <h1>Exercícios</h1>
          </div>
          <div className="col-12 col-md-6">
            <Image
              src="/images/exercicios/exercicios.svg"
              alt="Uma coleção de exercícios para você já ir começando a praticar o seu inglês."
              width={350}
              height={350}
              layout="responsive"
            />
          </div>
        </div>
        <div className="row mb-6">
          <div className="col-12 col-md-8 m-auto d-flex flex-column align-items-center justify-content-center">
            <p className="fs-5 mb-5">
              Uma coleção de exercícios para você já ir começando a praticar o
              seu inglês.
            </p>
            <h6 className="mb-3">Propaganda e Marketing</h6>
            <Link href="/exercicios/propaganda-e-marketing-planejamento-de-uma-campanha">
              <button className="btn btn-outline-primary">
                Planejamento de uma campanha
              </button>
            </Link>
            <h6 className="mt-5 mb-3">Apresentações Corporativas</h6>
            <Link href="/exercicios/apresentacoes-corporativas-numeros-aproximados">
              <button className="btn btn-outline-primary">
                Números aproximados
              </button>
            </Link>
            <h6 className="mt-5 mb-3">Email English</h6>
            <Link href="/exercicios/email-english-formal-and-informal-language-part-2">
              <button className="btn btn-outline-primary">
                Formal and informal language
              </button>
            </Link>
            <h6 className="mt-5 mb-3">Inglês para TI</h6>
            <Link href="/exercicios/ti-solucoes-em-ti">
              <button className="btn btn-outline-primary">
                Soluções em TI
              </button>
            </Link>
            <h6 className="mt-5 mb-3">English for Negotiating</h6>
            <Link href="/exercicios/negotiating-proposta-e-contraproposta">
              <button className="btn btn-outline-primary">
                Proposta e Contraproposta
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      <style jsx>
        {`
          h1 {
            font-weight: 900;
          }
        `}
      </style>
    </Layout>
  )
}

export default IndexOfExercises
