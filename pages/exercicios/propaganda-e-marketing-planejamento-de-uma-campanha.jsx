import { useRouter } from 'next/router'
import global from 'src/global'
import { meta } from 'components/SEO'
import Answers from 'components/exercicios/show-answers'
import Wrapper from 'components/exercicios/wrapper'

// component variables
export const title = 'Planejamento de uma campanha'
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
        O processo de geração e execução da propaganda obedece a uma ordem
        sequencial, ou seja, ocorre em várias etapas até que a informação chegue
        ao consumidor final e este efetivamente compre o produto anunciado.
        Quais são essas etapas? Em que ordem elas ocorrem?
      </p>
      <p>
        Neste exercício você precisa colocar as etapas que involvem a
        organização de uma campanha publicitária em ordem.
      </p>
      <h3>Over to you</h3>
      <h4 className="mt-3">Exercise</h4>
      <p>
        Look at the steps involved in organizing an advertising campaign and put
        them in order.
      </p>
      <figure>
        <table className="table table-bordered table-success">
          <tbody>
            <tr>
              <td>a) analyse impact</td>
              <td>e) define target group</td>
            </tr>
            <tr>
              <td>b) approve design</td>
              <td>f) determine the desired response</td>
            </tr>
            <tr>
              <td>c) choose the media</td>
              <td>g) estabilish message</td>
            </tr>
            <tr>
              <td>d) commision ad agency</td>
              <td>h) place ads</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <Answers>
        <h4>Answer</h4>
        <p>(suggested answers) 1e; 2g; 3f; 4d; 5c; 6b; 7h; 8a</p>
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
