import { useRouter } from 'next/router'
import global from 'src/global'
import { meta } from 'components/SEO'
import Answers from 'components/exercicios/show-answers'
import Wrapper from 'components/exercicios/wrapper'

// component variables
export const title = 'Formal and informal language - part 2'
export const section = global.exercicios.section.email
export const image = global.exercicios.banner.image.fileName.email
export const alt = global.exercicios.banner.image.alt.esp
export const button = global.exercicios.button
export const description =
  'Hoje eu quero voltar ao assunto de linguagem formal e informal. É muito importante escrever suas mensagens de email no registro correto para cada situação.'

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
        Hoje eu quero voltar ao assunto de linguagem formal e informal. É muito
        importante escrever suas mensagens de email no registro correto para
        cada situação. Você está escrevendo para um cliente de longa data, ou um
        comprador entrando em contato com a empresa pela primeira vez? O email
        se destina a um colega de trabalho com quem você sai às vezes para
        jantar, ou o destinatário é alguém em um nível mais alto na hierarquia
        da empresa? Fatores como esses precisam ser levados em conta na hora de
        redigir uma mensagem.
      </p>
      <p>
        No exercício de hoje eu vou apresentar algumas frases em linguagem
        informal, e depois você precisa encontrar a frase equivalente em um
        linguagem mais formal.
      </p>
      <h3>Over to you</h3>
      <p>Look at these informal language sentences:</p>
      <p>
        <strong>a)</strong> We hope you are happy with this. <strong>b)</strong>{' '}
        Please answer asap. <strong>c)</strong> I'm sending you...{' '}
        <strong>d)</strong> We are working on your request. <strong>e)</strong>{' '}
        Thanks for your email/request. <strong>f)</strong> Can you help?{' '}
        <strong>g)</strong> Let us know if you need any more help.{' '}
        <strong>h)</strong> I'm sending you the ... in an attachment.{' '}
        <strong>i)</strong> Thanks for choosing... <strong>j)</strong> Can you
        please send me... ?
      </p>
      <p>
        Now match the informal sentences above to the more formal sentences
        below:
      </p>
      <figure>
        <table className="table table-bordered table-success">
          <tbody>
            <tr>
              <td></td>
              <td>
                <strong>Requesting information</strong>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>I'd apreciate a reply asap.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Would you be able to help... ?</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Can you please send me... ?</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <strong>Replies</strong>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Please find the ... in an attachment.</td>
            </tr>
            <tr>
              <td>5</td>
              <td>I'm pleased to send you...</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Thank you for your email/enquiry.</td>
            </tr>
            <tr>
              <td>7</td>
              <td>
                Do not hesitate to contact us if you require any further
                assitance.
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>We hope you find this satisfactory.</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Thank you for your interest.</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Your request is being processed.</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <Answers>
        <h4>Answers</h4>
        <p>1b; 2f; 3j; 4h; 5c; 6e; 7g; 8a; 9i; 10d</p>
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
