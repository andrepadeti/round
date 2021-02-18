import { useRouter } from 'next/router'
import global from 'src/global'
import { meta } from 'components/SEO'
import Answers from 'components/exercicios/show-answers'
import Wrapper from 'components/exercicios/wrapper'

// component variables
export const title = 'Proposta e Contraproposta'
export const section = global.exercicios.section.negotiating
export const image = global.exercicios.banner.image.fileName.negotiating
export const alt = global.exercicios.banner.image.alt.esp
export const button = global.exercicios.button
export const description =
  'Chegou o momento da reunião com o seu parceiro de negócios, e ambos vão tentar chegar a um acordo que seja bom para todos. Nesse momento é importante usar uma linguagem seja respeitosa com o outro lado...'

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
        Chegou o momento da reunião com o seu parceiro de negócios, e ambos vão
        tentar chegar a um acordo que seja bom para todos. Nesse momento é
        importante usar uma linguagem que seja respeitosa com o outro lado,
        tanto se você vai apresentar a proposta ou a contraproposta (
        <strong>presenting proposals and counterproposals</strong>) quanto se
        você vai pedir ou dar esclarecimentos (
        <strong>asking for and clarifying information</strong>). Veja algumas
        frases que você pode usar:
      </p>
      <figure>
        <table className="table table-bordered table-success">
          <thead>
            <tr>
              <th>{`Presenting proposals and\ncounterproposals`}</th>
              <th>{`Asking for and clarifying\ninformation`}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I/We propose...</td>
              <td>... is correct, isn't it?</td>
            </tr>
            <tr>
              <td>I/We suggest...</td>
              <td>Can you tell me how...?</td>
            </tr>
            <tr>
              <td>How about... ?</td>
              <td>Is it alright with you if... ?</td>
            </tr>
            <tr>
              <td>Would it be possible... ?</td>
              <td>Would it be possible... ?</td>
            </tr>
            <tr>
              <td>How do you feel about... ?</td>
              <td>It seems... What is your opinion?</td>
            </tr>
            <tr>
              <td>Would/Could you consider... ?</td>
              <td></td>
            </tr>
            <tr>
              <td>Would/Could you accept... ?</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </figure>
      <p>
        Neste exercício, eu vou fazer uma lista do que foi proposto em uma
        reunião. Você precisa reescrever as frases como se você estivesse
        fazendo as propostas neste exato momento, usando as frases que eu
        apresentei na tabela acima. Veja um exemplo:
      </p>
      <p>
        The initial offer stated 15 working days for production and 5 days'
        delivery time.
        <br />
        ANSWER: <strong>We propose</strong> produc<strong>ing</strong> the goods
        within 15 working days and deliver<strong>ing</strong> five days after
        production is ready.
      </p>
      <h3>Over to you</h3>
      <p>Rewrite these sentences using the phrases in the table above:</p>
      <div>
        <ol>
          <li>
            The initial offer stated 15 working days for production and 5 days'
            delivery time.
          </li>
          <li>
            A proposal was made to produce the goods within 10 working days and
            deliver 5 days after production.
          </li>
          <li>A further proposal was to work two shifts instead of three.</li>
          <li>An alternative was part-shipments at five-day intervals.</li>
          <li>Delivery of amounts in fewer shipments was suggested.</li>
          <li>One shipment for the whole amount was discussed.</li>
        </ol>
      </div>
      <Answers>
        <h4>Answers</h4>
        <ol>
          <li>
            We propose producing the goods within 15 working days and delivering
            five days after production is ready.
          </li>
          <li>
            How do you feel about producing within 10 working days and
            delivering within 5 days after production?
          </li>
          <li>
            We propose working two shifts instead of three.
            <br />
            You suggest working in two shifts instead of three. This is correct,
            isn't it?
          </li>
          <li>
            Would delivery in part-shipments at five-day intervals be an
            alternative? <br />
            Can you tell me how you would arrange delivery at seven-day
            intervals?
          </li>
          <li>
            We suggest delivering larger amounts in fewer shipments. What is
            your opinion? <br />
            How do you feel about delivery in larger amounts and fewer
            shipments?
          </li>
          <li>
            Would you consider a delivery in one shipment? <br />
            Can you tell me how you would deliver in one shipment?
          </li>
        </ol>
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
