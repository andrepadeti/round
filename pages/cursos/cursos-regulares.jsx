import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import CourseDetails from '../../components/course-details'

const Regular = () => {
  const title = 'Cursos Regulares'
  const image = 'general'
  const body = [
    'Se você já está cansado de tentar aprender inglês mas não consegue alcançar seus objetivos porque as turmas não ajudam, porque você fala pouco inglês na aula e vê muita gramática, ou porque você não tem tempo para encarar o trânsito e ir até a escola, então eu tenho a solução para você!',
    'Nossas aulas são individuais ou em pequenos grupos que você mesmo pode montar com seus colegas. As aulas são comunicativas e você vai praticar a fala o tempo todo. E o melhor? Tudo online! Você não perde tempo se deslocando até a escola e tem acesso a um enorme conteúdo de material autêntico disponível na internet.',
  ]
  const button = { label: 'Quero fazer uma entrevista gratuita!', link: '' }

  return (
    <Layout page="general">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <CourseDetails title={title} image={image} body={body} button={button} />
    </Layout>
  )
}

export default Regular
