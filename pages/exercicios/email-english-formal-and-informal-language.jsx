import { useRouter } from 'next/router'
import Image from 'next/image'
import global from 'src/global'
import SEO, { meta } from 'components/SEO'
import Layout from 'components/layout'
import Banner from 'components/exercicios/banner'
import Answers from 'components/exercicios/show-answers'
import Advertisement from 'components/exercicios/advertisement'

const Exercicio = () => {
  const router = useRouter()
  // component variables
  const title = 'Formal and informal language'
  const section = global.exercicios.section.email
  const image = global.exercicios.banner.image.fileName.email
  const alt = global.exercicios.banner.image.alt.esp
  const button = global.exercicios.button

  // meta tags
  const localMeta = {
    ...meta,
    title: `${section} - ${title}`,
    description:
      'Nós escrevemos emails no trabalho usando uma linguagem mais formal quando estamos querendo ser educados, ou então quando não conhecemos muito bem o destinatário da mensagem. Por outro lado, se queremos ser mais amigáveis, ou se conhecemos quem vai ler o email, nós optamos por usar uma linguagem mais informal.',
    image: `/images/exercicios/${image}.jpg`,
    url: `${global.url}${router.pathname}`,
  }

  return (
    <Layout page="exercicios">
      <SEO meta={localMeta} />
      <div className="container">
        <Banner
          title={title}
          section={section}
          image={`${image}.svg`}
          alt={alt}
        />
        <div className="container-small">
          <div className="row row-cols-12">
            <p>
              Nós escrevemos emails no trabalho usando uma linguagem mais formal
              quando estamos querendo ser educados, ou então quando não
              conhecemos muito bem o destinatário da mensagem. Por outro lado,
              se queremos ser mais amigáveis, ou se conhecemos quem vai ler o
              email, nós optamos por usar uma linguagem mais informal.
            </p>
            <p>
              Mas como diferenciar a linguagem formal da informal quando o email
              é em inglês?
            </p>
            <p>
              Neste exercício, eu vou mostrar algumas frases típicas que usamos
              para escrever emails. Será que você consegue separá-las em
              linguagem formal e informal?
            </p>
            <h3>Over to you</h3>
            <p>
              Look at the paragraphs below and decide whether they were written
              in a formal or informal email.
            </p>
            <figure class="wp-block-image size-large">
            <Image
                src="/images/exercicios/formal_informal_language.png"
                width={600}
                height={800}
                layout="responsive"
              />
            </figure>
            <Answers>
            <h4>Answers</h4>
            <p>
              Formal email: sentences a, b, c, f, j<br />
              Informal email: sentences d, e, g, h, i
            </p>
            </Answers>
            <Advertisement course={section} button={button} />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          table {
            white-space: pre-line;
          }
          h3 {
            margin-top: 3rem;
          }

          h4 {
            margin-top: 1.5rem;
          }
        `}
      </style>
    </Layout>
  )
}

export default Exercicio
