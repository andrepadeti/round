import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import CourseDetails from '../../components/course-details'

const Regular = () => {
  const title = 'Propósitos Específicos'
  const image = 'esp'
  const body = [
    'O mercado pede cada vez mais que você seja capaz de trabalhar em parceria com profissionais de outros países e essa comunicação se dá, é claro, em inglês.',
    'Você não pode perder a oportunidade de trabalhar em um grupo profissional internacional só porque você não consegue se comunicar em inglês na sua área de atuação.',
    'Se você deseja aperfeiçoar seu inglês e se capacitar para se relacionar com profissionais de outros países, então os cursos de Inglês para Propósitos Específicos são para você.',
    'Esses são cursos rápidos e focados em praticar o inglês para áreas como TI, bancos, logística, contabilidade e outros temas específicos. As aulas são online, você não precisa perder tempo com deslocamento e temos acesso a um enorme conteúdo de material autêntico disponível na internet.'
  ]
  const button = { label: 'Quero fazer uma entrevista gratuita!', link: ''}

  return (
    <Layout page="regular">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <CourseDetails title={title} image={image} body={body} button={button} />
    </Layout>
  )
}

export default Regular
