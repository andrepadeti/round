import { useRouter } from 'next/router'
import global from 'src/global'
import { meta } from 'components/SEO'
import Answers from 'components/exercicios/show-answers'
import Wrapper from 'components/exercicios/wrapper'

// component variables
export const title = 'Tipos de Websites'
export const section = global.exercicios.section.it
export const image = global.exercicios.banner.image.fileName.it
export const alt = global.exercicios.banner.image.alt.esp
export const button = global.exercicios.button
export const description =
  'Veja alguns verbos que podem ser usados para descrever diferentes tipos de websites.'

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
        Quantos websites diferentes você visita em um dia típico? Eu não consigo
        nem contar! E cada um desses websites que visito é com um propósito
        diferente. Eu gosto de visitar os sites da BBC e da CNN para ler (read)
        notícias internacionais. Tem também os sites que os devs estão sempre
        visitiando para praticar (practise) habilidades ou compartilhar (share)
        conhecimento.
      </p>
      <p>
        Neste exercício você vai precisar completar as frases utilizando os
        verbos que estão na caixa. Preparado?
      </p>
      <h3>Over to you</h3>
      <h4>Exercise 1</h4>
      <p>Complete the sentences with the verbs in the box.</p>
      <figure>
        <table className="table table-bordered table-success text-center">
          <thead>
            <tr>
              <td>
                sell&nbsp;| share&nbsp;| offer&nbsp;| promote&nbsp;|
                practise&nbsp;| read&nbsp;
              </td>
            </tr>
          </thead>
        </table>
      </figure>
      <div>
        <ol>
          <li>I visit bbc.com to _____ international news.</li>
          <li>
          Companies use Amazon.com to _____ their products.
          </li>
          <li>
          Students visit Codecademy.com to _____ their coding skills. 
          </li>
          <li>
          Developers join StackOverflow.com to _____ knowledge and collaborate with each other. 
          </li>
          <li>
          Sustentabilidade.com.br wants to _____ environmentally friendly shopping.
          </li>
          <li>An electrician website wants to _____ a service. </li>
        </ol>
      </div>
      <Answers>
        <h4>Answers</h4>
        <p>1 read; 2 sell; 3 practise; 4 share;  5 promote; 6 offer </p>
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
