import { useRouter } from 'next/router'
import global from 'src/global'
import { meta } from 'components/SEO'
import Answers from 'components/exercicios/show-answers'
import Wrapper from 'components/exercicios/wrapper'

// component variables
export const title = 'Slides'
export const section = global.exercicios.section.presentations
export const image = global.exercicios.banner.image.fileName.presentations
export const alt = global.exercicios.banner.image.alt.esp
export const button = global.exercicios.button
export const description =
  'Uma apresentação corporativa serve para divulgar a empresa e mostrar os resultados. A maneira mais comum de apresentar dados é através de slides. Mas você sabe como introduzir os slides e os dados para a audiência?'

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
        Uma apresentação corporativa serve para divulgar a empresa e mostrar os
        resultados. A maneira mais comum de apresentar dados é através de
        slides. Mas você sabe como introduzir os slides e os dados para a
        audiência?
      </p>
      <p>
        Neste exercício nós vamos ver algumas frases que vão ajudar você na hora
        de apresentar essas informações. Você precisa ligar o começo das frases
        na coluna A com o final na coluna B.
      </p>
      <h3>Over to you</h3>
      <p>
        Match column A with column B to make sentences used to refer to slides.
      </p>
      <figure>
        <table className="table table-bordered table-success align-middle">
          <thead>
            <tr>
              <th>A</th>
              <th>B</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1] On the next page</td>
              <td>a] from this picture, the design is very modern-looking.</td>
            </tr>
            <tr>
              <td>2] My next slide shows</td>
              <td>
                b] customers have made favourable comments about the service.
              </td>
            </tr>
            <tr>
              <td>3] As you can see</td>
              <td>c] how much the market has evolved.</td>
            </tr>
            <tr>
              <td>4] Let me just show you some</td>
              <td>d] I'll show you our latest campaign.</td>
            </tr>
            <tr>
              <td>5] To illustrate this,</td>
              <td>e] at the figures on the next slide.</td>
            </tr>
            <tr>
              <td>6] Let's now have a closer look</td>
              <td>f] which shows the market development in 2019.</td>
            </tr>
            <tr>
              <td>7] Here we can see how many</td>
              <td>g] more precise details.</td>
            </tr>
            <tr>
              <td>8] I have a slide</td>
              <td>h] you will see a picture of our new G8 model.</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <Answers>
        <h4>Answers</h4>
        <p>1h; 2c; 3a; 4g; 5d; 6e; 7b; 8f</p>
      </Answers>
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
    </Wrapper>
  )
}

export default Exercicio
