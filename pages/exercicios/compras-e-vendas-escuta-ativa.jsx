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
  const title = 'Escuta Ativa'
  const section = global.exercicios.section.sales_purchasing
  const image = global.exercicios.banner.image.fileName.sales_purchasing
  const alt = global.exercicios.banner.image.alt.esp
  const button = global.exercicios.button

  // meta tags
  const localMeta = {
    ...meta,
    title: `${section} - ${title}`,
    description:
      'Quando conversamos com o um lead, na maioria das vezes, estamos ouvindo e aguardando uma oportunidade para responder. Nós temos a tendência de fazer isso o tempo todo, em várias situações da vida, e não só no contexto profissional. O ideal, porém, é que tenhamos uma escuta ativa ou active listening.',
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
              Quando conversamos com o um lead, na maioria das vezes, estamos
              ouvindo e aguardando uma oportunidade para responder. Nós temos a
              tendência de fazer isso o tempo todo, em várias situações da vida,
              e não só no contexto profissional. O ideal, porém, é que tenhamos
              uma <strong>escuta ativa</strong> ou{' '}
              <strong>active listening</strong>.
            </p>
            <p>
              Por que é importante fazer uma escuta ativa? São três os motivos:
            </p>
            <div>
              <ol>
                <li>
                  Gerar empatia
                  <ul>
                    <li>
                      demonstrar que você entendeu o que o lead está dizendo.
                    </li>
                  </ul>
                </li>
                <li>
                  Obter mais informações
                  <ul>
                    <li>
                      para ter uma conversa mais produtiva para você e o seu
                      lead.
                    </li>
                  </ul>
                </li>
                <li>
                  Melhorar a comunicação
                  <ul>
                    <li>
                      evitar que você só pergunte e o seu lead só responda.{' '}
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
            <p>E como fazer isso em inglês?</p>
            <p>
              Neste exercício eu vou mostrar algumas frases estratégicas para
              que você cheque a informação que está ouvindo para ter certeza de
              que está entendendo a mensagem corretamente. Você vai classificar
              as frases em quatro estratégias diferentes:{' '}
              <strong>back-channelling</strong>, para demonstrar que você está
              ouvindo ativamente; <strong>prompting</strong>, para pedir mais
              informaçoes sobre o assunto; <strong>paraphrasing</strong>,
              repetir para ter certeza de que entendeu corretamente; e{' '}
              <strong>confirming</strong>, para mostrar que você compreendeu a
              mensagem.
            </p>
            <h3>Over to you</h3>
            <p>
              Look at the sentences below and decide which listening strategy is
              being used: back-channelling, prompting, paraphrasing or
              confirming.
            </p>
            <figure>
              <Image
                src="/images/exercicios/escuta_ativa.png"
                width={600}
                height={800}
                layout="responsive"
              />
            </figure>
            <Answers>
              <h4>Answers</h4>
              <p>
                Back-channelling: a, f.
                <br />
                Prompting: c, g.
                <br />
                Paraphrasing: b, e.
                <br />
                Confirming: d, h.
              </p>
            </Answers>
            <Advertisement course={section} button={button} />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          table {
            table-layout: fixed;
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
