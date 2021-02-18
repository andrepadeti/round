import { useRouter } from 'next/router'
import global from 'src/global'
import { meta } from 'components/SEO'
import Answers from 'components/exercicios/show-answers'
import Wrapper from 'components/exercicios/wrapper'
import Image from 'next/image'

// component variables
export const title = 'Formal and informal language'
export const section = global.exercicios.section.email
export const image = global.exercicios.banner.image.fileName.email
export const alt = global.exercicios.banner.image.alt.esp
export const button = global.exercicios.button
export const description =
  'Nós escrevemos emails no trabalho usando uma linguagem mais formal quando estamos querendo ser educados, ou então quando não conhecemos muito bem o destinatário da mensagem. Por outro lado, se queremos ser mais amigáveis, ou se conhecemos quem vai ler o email, nós optamos por usar uma linguagem mais informal.'

const Exercicio = () => {
  const router = useRouter()

  // meta tags
  const localMeta = {
    ...meta,
    title: `${section} - ${title}`,
    description,
    image: `/images/exercicios/${image}.jpg`,
    url: `${global.url}${router.pathname}`,
  }

  return (
    <Wrapper
      page="exercicios"
      meta={localMeta}
      title={title}
      section={section}
      image={image}
      alt={alt}
      button={button}
    >
      <p>
        Nós escrevemos emails no trabalho usando uma linguagem mais formal
        quando estamos querendo ser educados, ou então quando não conhecemos
        muito bem o destinatário da mensagem. Por outro lado, se queremos ser
        mais amigáveis, ou se conhecemos quem vai ler o email, nós optamos por
        usar uma linguagem mais informal.
      </p>
      <p>
        Mas como diferenciar a linguagem formal da informal quando o email é em
        inglês?
      </p>
      <p>
        Neste exercício, eu vou mostrar algumas frases típicas que usamos para
        escrever emails. Será que você consegue separá-las em linguagem formal e
        informal?
      </p>
      <h3>Over to you</h3>
      <p>
        Look at the paragraphs below and decide whether they were written in a
        formal or informal email.
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
    </Wrapper>
  )
}

export default Exercicio
