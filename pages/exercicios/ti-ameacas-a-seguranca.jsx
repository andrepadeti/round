import { useRouter } from 'next/router'
import global from 'src/global'
import { meta } from 'components/SEO'
import Answers from 'components/exercicios/show-answers'
import Wrapper from 'components/exercicios/wrapper'

// component variables
export const title = 'Ameaças à Segurança'
export const section = global.exercicios.section.it
export const image = global.exercicios.banner.image.fileName.it
export const alt = global.exercicios.banner.image.alt.esp
export const button = global.exercicios.button
export const description =
  'Você sabe descrever algumas das principais ameças à segurança em inglês?'

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
        Os <strong>ataques à segurança da informação</strong> são cada vez mais
        frequentes e precisam ser levados a sério, independente do tamanho da
        sua organização. Mas você sabe como descrever em inglês esses ataques?
        Algumas das palavras mais comuns usadas para descrever esses ataques
        são: adware, hacker, browser hijacker, malware attack, spyware, trojan
        (pronuncia-se <span class="text-nowrap">/ˈtrəʊdʒ(ə)n/)</span>, virus e
        worm.
      </p>
      <p>
        Neste exercício nós vamos ver como definir cada uma dessas palavras.
        Você precisa ligar as palavras às definições. Vamos em frente!
      </p>
      <h3>Over to you</h3>
      <h4>Exercise 1</h4>
      <p>Match the words in the box with their definitions.</p>
      <figure>
        <table className="table table-bordered table-success text-center">
          <thead>
            <tr>
              <td>
                1&nbsp;adware&nbsp;| 2&nbsp;hacker&nbsp;| 3&nbsp;browser&nbsp;hijacker&nbsp;| 4&nbsp;spyware&nbsp;| 5&nbsp;malware&nbsp;attack&nbsp;| 6&nbsp;trojan&nbsp;| 7&nbsp;virus&nbsp;| 8&nbsp;worm
              </td>
            </tr>
          </thead>
        </table>
      </figure>
      <div>
        <ol type="a">
          <li>
            Malicious software that can copy itself and infect the system.
          </li>
          <li>
            Affects privacy. It does not take control of a computer system, but
            sends information about the use of a computer system.
          </li>
          <li>
            Spreads without the user taking action and usually acts in operation
            system.
          </li>
          <li>
            A person who on purpose attempts to break into a computer system and
            use it without the knowledge of the owner.
          </li>
          <li>
            Software that modifies a web browser’s settings and replaces the
            user's search engine with its own.
          </li>
          <li>An effort to gain unauthorised access to a computer.</li>
          <li>A program that automatically plays commercials on a computer.</li>
          <li>A program that is usually free but contains malicious files.</li>
        </ol>
      </div>
      <Answers>
        <h4>Answers</h4>
        <p>1g; 2d; 3e; 4b; 5f; 6h; 7a; 8c</p>
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
