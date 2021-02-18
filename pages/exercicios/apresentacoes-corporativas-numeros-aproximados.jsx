import { useRouter } from 'next/router'
import global from 'src/global'
import { meta } from 'components/SEO'
import Answers from 'components/exercicios/show-answers'
import Wrapper from 'components/exercicios/wrapper'

// component variables
export const title = 'Números aproximados'
export const section = global.exercicios.section.presentations
export const image = global.exercicios.banner.image.fileName.presentations
export const alt = global.exercicios.banner.image.alt.esp
export const button = global.exercicios.button
export const description =
  'Uma das estratégias que utilizamos em uma apresentação corporativa é a de mostrar alguns resultados obtidos pela empresa ao longo do tempo. Porém nem sempre é necessário ou desejável dar números exatos.'

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
        Uma das estratégias que utilizamos em uma apresentação corporativa é a
        de mostrar alguns resultados obtidos pela empresa ao longo do tempo.
        Porém nem sempre é necessário ou desejável dar números exatos. Números
        arredondados são, inclusive, mais fáceis de entender e de lembrar. Por
        exemplo, você não precisa dizer que 'Last year we sold 90,043 mobile
        phones in Rio de Janeiro'. Ao invés disso, você pode dizer que 'Last
        year we sold <strong>a little more than/just over</strong> 90,000 mobile
        phones in Rio de Janeiro'.
      </p>
      <p>
        Neste exercício nós vamos ver algumas expressões que você pode utilizar
        para falar sobre números aproximados. Depois você vai reescrever algumas
        frases com números exatos utlizando as expressões do primeiro exercício
        para dar números aproximados.
      </p>
      <h3>Over to you</h3>
      <h4>Exercise 1</h4>
      <p>Put the words from the box in the correct column in the table.</p>
      <p>
        <strong>
          a little less than • about • almost • approximately • around • just
          over • just under • nearly • roughly • well over
        </strong>
      </p>
      <figure>
        <table className="table table-bordered table-success">
          <thead>
            <tr>
              <th>{`-\n(less)`}</th>
              <th>{`+/-\n(about the same)`}</th>
              <th>{`+\n(more)`}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>{`almost\n...\n\n\n\n`}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </figure>
      <Answers>
        <h4>Answers</h4>
        <p>
          - (less): a little less than, just under
          <br />
          +/- (about the same): about, almost, approximately, around, nearly,
          roughly
          <br />+ (more): just over, well over
        </p>
      </Answers>
      <h4>Exercise 2</h4>
      <p>
        Rewrite the sentences replacing the exact numbers with approximate
        numbers using words from Exercise 1.
      </p>
      <div>
        <ol>
          <li>Last year we sold 90,043 mobile phones in Rio de Janeiro.</li>
          <li>
            15,8% of the people interviewed said they were unhappy with the new
            design.
          </li>
          <li>We will be spending R$1.97m on this technology.</li>
          <li>Our laboratory says the ideal temperature is 19.1°C.</li>
          <li>It will cost R$4.96 to produce this item.</li>
          <li>The new office is 392m².</li>
        </ol>
      </div>
      <Answers>
        <h4>Answers</h4>
        <ol>
          <li>a little more than/just over 90,000</li>
          <li>almost/nearly 16%</li>
          <li>roughly/around 2 million reais</li>
          <li>just over/approximately 19° centigrade</li>
          <li>just under/a little less than 5 reais</li>
          <li>approximately/roughly 400 square metres</li>
        </ol>
      </Answers>
      <style jsx>
        {`
          table {
            table-layout: fixed;
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
    </Wrapper>
  )
}

export default Exercicio
