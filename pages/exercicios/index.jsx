import SEO, { meta } from '../../components/SEO'
import Layout from '../../components/layout'
import Image from 'next/image'
import Link from 'next/link'

import global, { exercises } from 'src/global'

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
      <div className="container-fluid hero">
        <div className="container-main">
          <div className="row justify-content-center align-items-center mb-5">
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
        </div>
      </div>
      <div className="container">
        <div className="row mb-6">
          <div className="col-12 col-md-8 m-auto d-flex flex-column align-items-center justify-content-center">
            <p className="mb-5 text-center">
              Uma coleção de exercícios para você já ir começando a praticar o
              seu inglês.
            </p>

            {Object.keys(exercises.section).map((section, index) => (
              <div
                className="d-flex flex-column align-items-center"
                key={index}
              >
                <h6 className="mt-5 mb-3">
                  {global.exercicios.section[section]}
                </h6>
                {exercises.section[section].items.map((item, index) => (
                  <Link href={`/exercicios/${item.url}`} key={index}>
                    <button className="btn btn-primary shadow mb-2">
                      {item.title}
                    </button>
                  </Link>
                ))}
              </div>
            ))}
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
