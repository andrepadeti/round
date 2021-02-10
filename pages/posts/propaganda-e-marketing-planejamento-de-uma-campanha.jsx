import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import BlogBanner from '../../components/blog/banner'
import Answers from '../../components/blog/show-answers'
import Advertisement from '../../components/blog/advertisement'

const Regular = () => {
  const title = 'Planejamento de uma campanha'
  const section = 'Propaganda e Marketing'
  const image = 'marketing.svg'
  const alt =
    'Cursos oferecidos. Cursos de inglês regulares. Aprenda inglês para usar no dia a dia, em viagens internacionais, para assistir filmes e para acessar a internet.'
  const body = [
    'Se você já está cansado de tentar aprender inglês mas não consegue alcançar seus objetivos porque as turmas não ajudam, porque você fala pouco inglês na aula e vê muita gramática, ou porque você não tem tempo para encarar o trânsito e ir até a escola, então eu tenho a solução para você!',
    'Nossas aulas são individuais ou em pequenos grupos que você mesmo pode montar com seus colegas. As aulas são comunicativas e você vai praticar a fala o tempo todo. E o melhor? Tudo online! Você não perde tempo se deslocando até a escola e tem acesso a um enorme conteúdo de material autêntico disponível na internet.',
  ]
  const button = { label: 'Quero fazer uma entrevista gratuita!', link: '' }

  return (
    <Layout page="blog">
      <Head>
        <title>{`${siteTitle} - Exercícios - ${title}`}</title>
      </Head>
      <div className="container">
        <BlogBanner title={title} section={section} image={image} alt={alt} />
        <div className="container-small">
          <div className="row">
            <p>
              O processo de geração e execução da propaganda obedece a uma ordem
              sequencial, ou seja, ocorre em várias etapas até que a informação
              chegue ao consumidor final e este efetivamente compre o produto
              anunciado. Quais são essas etapas? Em que ordem elas ocorrem?
            </p>
            <p>
              Neste exercício você precisa colocar as etapas que involvem a
              organização de uma campanha publicitária em ordem.
            </p>
            <h3 className="mt-5">Over to you</h3>
            <h4>Exercise</h4>
            <p>
              Look at the steps involved in organizing an advertising campaign
              and put them in order.
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
          </div>
          <Answers>
            <h4>Answer</h4>
            <p>(suggested answers) 1e; 2g; 3f; 4d; 5c; 6b; 7h; 8a</p>
          </Answers>
          <Advertisement />
        </div>
      </div>
    </Layout>
  )
}

export default Regular
