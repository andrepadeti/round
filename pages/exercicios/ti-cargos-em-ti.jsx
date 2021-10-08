import { useRouter } from 'next/router'
import global from 'src/global'
import { meta } from 'components/SEO'
import Answers from 'components/exercicios/show-answers'
import Wrapper from 'components/exercicios/wrapper'
import Image from 'next/image'

// component variables
export const title = 'Cargos em TI'
export const section = global.exercicios.section.it
export const image = global.exercicios.banner.image.fileName.it
export const alt = global.exercicios.banner.image.alt.esp
export const button = global.exercicios.button
export const description =
  'Você sabe dizer qual é o cargo em TI apenas lendo uma definição?'

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
        Quando você vai apresentar o time para um cliente, é uma boa ideia fazer
        uma pequena descrição do trabalho de cada pessoa no time. Afinal, o
        cliente pode não conhecer os diferentes cargos na área de TI. O que faz
        um <strong>analista de banco de dados</strong>, de{' '}
        <strong>suporte de TI</strong>, um{' '}
        <strong>administrador de redes</strong> ou um{' '}
        <strong>arquiteto de redes</strong>?
      </p>
      <p>
        Neste exercício nós vamos ver a Sylvia descrevendo brevemente o que cada
        um dos seus colegas faz. Depois você precisa ligar os nomes das pessoas
        aos cargos que elas ocupam. Mãos à obra?
      </p>
      <h3>Over to you</h3>
      <h4>Exercise</h4>
      <p>Read Sylvia presenting her colleagues to a client:</p>
      <figure>
        <Image
          src="/images/exercicios/ti-cargos-em-ti.png"
          width={1080}
          height={1080}
          layout="responsive"
        />
      </figure>
      <p>Sylvia is describing the following jobs:</p>
      <figure>
        <table className="table table-bordered table-success text-center">
          <thead>
            <tr>
              <td>
                1&nbsp;database&nbsp;analyst&nbsp;|
                2&nbsp;IT&nbsp;support&nbsp;officer&nbsp;|
                3&nbsp;network&nbsp;administrator&nbsp;|
                4&nbsp;network&nbsp;architect
              </td>
            </tr>
          </thead>
        </table>
      </figure>
      <p>
        Match the jobs to the people &mdash; Sylvia, Isabelle, Andrew, Mark and
        Latika.
      </p>
      <Answers>
        <h4>Answers</h4>
        <p>1 Mark and Latika; 2 Andrew; 3 Sylvia; 4 Isabelle</p>
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
