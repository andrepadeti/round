import { useRouter } from 'next/router'
import global from 'src/global'
import { meta } from 'components/SEO'
import Answers from 'components/exercicios/show-answers'
import Wrapper from 'components/exercicios/wrapper'
import Image from 'next/image'

// component variables
export const title = 'Elementos da GUI'
export const section = global.exercicios.section.it
export const image = global.exercicios.banner.image.fileName.it
export const alt = global.exercicios.banner.image.alt.esp
export const button = global.exercicios.button
export const description = 'Você sabe os nomes dos elementos da GUI em inglês?'

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
        E se você precisar explicar para o cliente o passo a passo para acessar
        uma funcionalidade do sistema? Você vai precisar se referir aos
        elementos da GUI em inglês. Muitos desses elementos tem nomes parecidos
        em inglês e português. Por exemplo, o botão maximizar é o{' '}
        <strong>maximize button</strong>. E os demais elementos? Será que você
        consegue dizer os nomes deles em inglês?
      </p>
      <p>
        Neste exercício você precisa ligar os nomes dos elementos da GUI com as
        letras na figura. Vamos lá!
      </p>
      <h3>Over to you</h3>
      <h4>Exercise</h4>
      <p>Match the words in the box with the letters in the picture.</p>
      <figure>
        <table className="table table-bordered table-success text-center">
          <thead>
            <tr>
              <td>
                minimize&nbsp;button&nbsp;| maximize&nbsp;button&nbsp;|
                folder&nbsp;| filename&nbsp;| check&nbsp;box&nbsp;|
                radio&nbsp;button&nbsp;| scroll&nbsp;bar&nbsp;| menu&nbsp;|
                title&nbsp;bar&nbsp;| icon&nbsp;| left-hand&nbsp;pane&nbsp;| tab
              </td>
            </tr>
          </thead>
        </table>
      </figure>
      <figure>
        <Image
          src="/images/exercicios/ti-elementos-da-gui.png"
          width={536}
          height={440}
          layout="responsive"
        />
      </figure>
      <Answers>
        <h4>Answers</h4>
        <p>
          A scroll bar; B title bar; C filename; D check box; E tab; F minimise
          button; G maximise button; H radio button; I left-hand pane; J folder;
          K icon; L menu
        </p>
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
