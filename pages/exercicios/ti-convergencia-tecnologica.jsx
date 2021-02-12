import { useRouter } from 'next/router'
import global from 'src/global'
import SEO, { meta } from 'components/SEO'
import Layout from 'components/layout'
import Banner from 'components/exercicios/banner'
import Answers from 'components/exercicios/show-answers'
import Advertisement from 'components/exercicios/advertisement'

const Exercicio = () => {
  const router = useRouter()
  // component variables
  const title = 'Convergência tecnológica'
  const section = global.exercicios.section.it
  const image = global.exercicios.banner.image.fileName.it
  const alt = global.exercicios.banner.image.alt.esp
  const button = global.exercicios.button

  // meta tags
  const localMeta = {
    ...meta,
    title: `${section} - ${title}`,
    description:
      'Você foi chamado para analisar a situação do TI de uma empresa e agora precisa produzir um relatório para enviar para o seu cliente.',
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
            <p>O que é convergência tecnológica?</p>
            <figure>
              <blockquote className="blockquote bg-lighter fs-6 p-3 border">
                <p>
                  <strong>Convergência tecnológica</strong>&nbsp;é um termo que,
                  de uma maneira geral, é utilizado para designar a tendência de
                  utilização de uma única infraestrutura de tecnologia para
                  prover serviços que, anteriormente, requeriam equipamentos,
                  canais de comunicação, protocolos epadrões independentes.
                </p>
                <figcaption className="blockquote-footer">
                  <a
                    href="https://pt.wikipedia.org/wiki/Converg%C3%AAncia_tecnol%C3%B3gica"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Wikipedia
                  </a>
                </figcaption>
              </blockquote>
            </figure>
            <p>
              O uso de smartphones está no centro da convergência tecnólogica.{' '}
            </p>
            <p>
              Neste exercícios nós vamos aprender algumas palavras que usamos
              para falar desse assunto. Primeiro vamos fazer um exercício para
              aprender que palavras são essas. Depois, vamos aprender a usar
              essas palavras em contexto.
            </p>
            <h3>Over to you</h3>
            <h4>Exercise 1</h4>
            <p>Match a word from column A with a word from column B.</p>
            <figure className="col-12 col-md-8 m-auto">
              <table className="table table-bordered table-success">
                <thead>
                  <tr>
                    <th>A</th>
                    <th>B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>data</td>
                    <td>technology</td>
                  </tr>
                  <tr>
                    <td>disruptive</td>
                    <td>calls</td>
                  </tr>
                  <tr>
                    <td>search</td>
                    <td>engine</td>
                  </tr>
                  <tr>
                    <td>voice</td>
                    <td>camera</td>
                  </tr>
                  <tr>
                    <td>broadband</td>
                    <td>provider</td>
                  </tr>
                  <tr>
                    <td>digital</td>
                    <td>pipe</td>
                  </tr>
                  <tr>
                    <td>internet</td>
                    <td>access</td>
                  </tr>
                  <tr>
                    <td>service</td>
                    <td>centre</td>
                  </tr>
                </tbody>
              </table>
            </figure>
            <Answers>
              <h4>Answers</h4>
              <p>
                data centre; disruptive technology; search engine; voice calls;
                broadband pipe; digital camera; internet access; service
                provider
              </p>
            </Answers>

            <h4>Exercise 2</h4>
            <p>
              Now, complete these sentences with the word pairs in the previous
              exercise:
            </p>
            <div>
              <ol>
                <li>
                  A [-----] is an organisation that gives its customers
                  facilities such as internet access or mobile telephony.
                </li>
                <li>
                  Traditionally, telecoms companies made most of their profits
                  from [-----], but they have had to diversify into other areas.
                </li>
                <li>
                  A [-----] is a high speed communications channel using a wire
                  or optical cable.
                </li>
                <li>
                  A [-----] is a facility where a company's data and
                  applications can be stored securely.
                </li>
                <li>
                  A [-----] is a new invention or process that provides a new
                  product or service in an unexpected way.
                </li>
                <li>
                  With a 4G-enabled smartphone, you can have high speed [-----]
                  24/7 wherever you go.
                </li>
                <li>
                  Google rapidly became the most widely used [-----] in the
                  2000s.
                </li>
                <li>
                  The quality of a [-----] depends on the number of pixels and
                  the lens.{' '}
                </li>
              </ol>
            </div>
            <Answers>
              <h4>Answers</h4>
              <p>
                1 service provider; 2 voice calls; 3 broadband pipe; 4 data
                centres; 5 disruptive technologies; 6 internet access; 7 search
                engine; 8 digital camera
              </p>
            </Answers>
            <Advertisement course={section} button={button} />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          table {
            text-align: center;
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
