import { useRouter } from 'next/router'
import global from 'src/global'
import { meta } from 'components/SEO'
import Answers from 'components/exercicios/show-answers'
import Wrapper from 'components/exercicios/wrapper'

// component variables
export const title = 'Estratégias de precificação'
export const section = global.exercicios.section.marketing
export const image = global.exercicios.banner.image.fileName.marketing
export const alt = global.exercicios.banner.image.alt.esp
export const button = global.exercicios.button
export const description =
  'O processo de geração e execução da propaganda obedece a uma ordem sequencial, ou seja, ocorre em várias etapas até que a informação chegue ao consumidor final e este efetivamente compre o produto anunciado. Quais são essas etapas? Em que ordem elas ocorrem?'

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
        No último exercício na área de Propaganda e Marketing eu falei sobre Mix
        de Marketing e os 4 Ps. Hoje eu vou falar mais especificamente sobre um
        desses Ps, o preço (<strong>price</strong>). É fundamental encontrar o
        preço ideal, pois ele potencializará as vendas e o lucro da empresa. São
        várias as estratégias de precificação: preço cativo (
        <strong>captive product pricing</strong>); preço baixo (
        <strong>economy pricing</strong>); preço por geografia (
        <strong>geographical pricing</strong>); preço de penetração (
        <strong>penetration pricing</strong>); preços premium (
        <strong>premium pricing</strong>); preço de desnatação (
        <strong>price skimming</strong>).
      </p>
      <p>
        Neste exercício, eu vou dar uma lista de definições e você precisa dizer
        qual dessas estratégias de precificação está sendo definida.
      </p>
      <h3>Over to you</h3>
      <p>Match the definitions to the pricing models.</p>
      <figure>
        <table className="table table-bordered table-success align-middle fs-7">
          <thead>
            <tr>
              <th className="w-75">Definitions</th>
              <th className="w-25">Pricing Models</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1) pricing goods/services as low as possible</td>
              <td>a) captive product pricing</td>
            </tr>
            <tr>
              <td>
                2) charge the highest initial price that customers will pay,
                then lower the price to attract a more price-sensitive segment
              </td>
              <td>b) economy pricing</td>
            </tr>
            <tr>
              <td>
                3) charge a high price to create the perception that it is a
                high-quality product
              </td>
              <td>c) geographical pricing</td>
            </tr>
            <tr>
              <td>
                4) entering the market of a product with a very low price, later
                raising the prices
              </td>
              <td>d) penetration pricing</td>
            </tr>
            <tr>
              <td>
                5) adjust the selling price of a product according to a
                customer's location
              </td>
              <td>e) premium pricing</td>
            </tr>
            <tr>
              <td>
                6) pricing the <em>core product</em> very low and the{' '}
                <em>accessory products</em> very high
              </td>
              <td>f) price skimming</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <Answers>
        <h4>Answers</h4>
        <p>1b; 2f; 3e; 4d; 5c; 6a</p>
      </Answers>
      <style jsx>
        {`
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
