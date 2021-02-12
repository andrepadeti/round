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
  const title = 'Marcando a primeira reunião'
  const section = global.exercicios.section.negotiating
  const image = global.exercicios.banner.image.fileName.negotiating
  const alt = global.exercicios.banner.image.alt.esp
  const button = global.exercicios.button

  // meta tags
  const localMeta = {
    ...meta,
    title: `${section} - ${title}`,
    description:
      'Você já fez um primeiro contato, pessoalmente ou por telefone, com o seu futuro parceiro de negócios e agora está na hora de marcar a primeira reunião para discutir as estratégias do negócio. É importante enviar um email confirmando a reunião e especificando as pautas da reunião. ',
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
              Você já fez um primeiro contato, pessoalmente ou por telefone, com
              o seu futuro parceiro de negócios e agora está na hora de marcar a
              primeira reunião para discutir as estratégias do negócio. É
              importante enviar um email confirmando a reunião e especificando
              as pautas da reunião.
            </p>
            <p>
              Neste exercício nós vamos ver algumas frases que você deve usar
              para que seu email tenha o tom profissional adequado.
            </p>
            <p>
              As frases serão classificadas em{' '}
              <strong>Formal opening sentences</strong>,{' '}
              <strong>Formal closing sentences</strong>,{' '}
              <strong>Formal questions to confirm details</strong> e{' '}
              <strong>Adding in a final point and justifying it</strong>. Você
              precisa decidir em qual dessas categorias as frases se encaixam.
            </p>
            <h3>Over to you</h3>
            <p>Match the sentences below to one of these categories:</p>
            <p>
              1) Formal opening sentences
              <br />
              2) Formal closing sentences
              <br />
              3) Formal questions to confirm details
              <br />
              4) Adding in a final point and justifying it
            </p>
            <p>
              a) It will be nice to put a face to a name.
              <br />
              b) Could we put … on the agenda after point … ?<br />
              c) I believe we will need to speak about … as well.
              <br />
              d) I am writing to confirm ...
              <br />
              e) Could you please confirm that you have received the revised
              agenda?
              <br />
              f) Shall we move forward on this basis?
              <br />
              g) I look forward to meeting/seeing you ...
              <br />
              h) Attached you will find...
            </p>
            <Answers>
              <h4>Answers</h4>
              <p>
                1) d, h; 2) a, g; 3) e, f; 4) b, c<br />
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
