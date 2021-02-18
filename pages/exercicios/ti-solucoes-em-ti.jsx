import { useRouter } from 'next/router'
import global from 'src/global'
import { meta } from 'components/SEO'
import Answers from 'components/exercicios/show-answers'
import Wrapper from 'components/exercicios/wrapper'

// component variables
export const title = 'Soluções em TI'
export const section = global.exercicios.section.it
export const image = global.exercicios.banner.image.fileName.it
export const alt = global.exercicios.banner.image.alt.esp
export const button = global.exercicios.button
export const description =
  'Você foi chamado para analisar a situação do TI de uma empresa e agora precisa produzir um relatório para enviar para o seu cliente.'

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
        Você foi chamado para analisar a situação do TI de uma empresa e agora
        precisa produzir um relatório para enviar para o seu cliente. Em sua
        análise você percebe que existem alguns problemas (
        <strong>issues</strong>) com o TI da empresa: alguns aplicativos não
        funcionam bem juntos (they are <strong>incompatible</strong>), outros
        poderiam ser melhor configurados para aumentar a sua utilidade (
        <strong>functionality</strong>). Você sugere que algumas máquinas
        recebam mais memória (<strong>capacity increases</strong>) e que todos
        passem a utilizar o mesmo sistema operacional, aumentando o volume de
        compra de um mesmo produto e alcançando ganhos de escala (
        <strong>volume discounts</strong>).
      </p>
      <p>
        Neste exercício nós vamos ver algumas palavras para falar de problemas e
        soluções de TI. Primeiro você precisa ligar as palavras com as suas
        definições. Depois você vai usar algumas dessas palavras para completar
        uma série de frases. Mãos à obra!
      </p>
      <h3>Over to you</h3>
      <h4>Exercise 1</h4>
      <figure>
        <table className="table table-bordered table-success">
          <thead>
            <tr>
              <th>A</th>
              <th>B</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1) capacity increases</td>
              <td>a) joining together into one</td>
            </tr>
            <tr>
              <td>2) vendors</td>
              <td>b) able to function well together</td>
            </tr>
            <tr>
              <td>3) consolidation</td>
              <td>c) improvements in size or power</td>
            </tr>
            <tr>
              <td>4) incompatible</td>
              <td>d) unable to function well together</td>
            </tr>
            <tr>
              <td>5) compatible</td>
              <td>e) sellers</td>
            </tr>
            <tr>
              <td>6) integrate</td>
              <td>f) price reductions for buying in bulk</td>
            </tr>
            <tr>
              <td>7) functionality</td>
              <td>g) properly organized</td>
            </tr>
            <tr>
              <td>8) volume discounts</td>
              <td>h) usefulness</td>
            </tr>
            <tr>
              <td>9) coordinated</td>
              <td>i) problems</td>
            </tr>
            <tr>
              <td>10) issues</td>
              <td>j) combine to work together</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <Answers>
        <h4>Answers</h4>
        <p>1c; 2e; 3a; 4d; 5b; 6j; 7h; 8f; 9g; 10i</p>
      </Answers>
      <h4>Exercise 2</h4>
      <p>
        Complete the sentences using some of the words in column A in the
        previous exercise:
      </p>
      <div>
        <ol>
          <li>
            The trial version only has limited _____. If you want to use all the
            features, you have to buy the full version.
          </li>
          <li>
            We had some serious _____ with our IT infrastructure, so we called
            in some consultants.
          </li>
          <li>
            If the printer isn't _____ with your operating system, it won't
            work.
          </li>
          <li>
            After a series of _____, our broadband speed has now risen to
            100Mbps.
          </li>
          <li>
            The rollout of the new software was very well _____, and everything
            went smoothly.
          </li>
          <li>
            If all our departments buy new software licenses at the same time,
            we'll get good _____.
          </li>
        </ol>
      </div>
      <Answers>
        <h4>Answers</h4>
        <p>
          1) functionality; 2) issues; 3) compatible; 4) capacity increases; 5)
          coordinated; 6) volume discounts.
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
