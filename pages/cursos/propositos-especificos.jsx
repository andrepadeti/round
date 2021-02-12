import SEO, { meta } from '../../components/SEO'
import Layout from '../../components/layout'
import CourseDetails from '../../components/course-details'

const ESP = () => {
  // meta tags
  const localMeta = {
    ...meta,
    title: 'Round English - Cursos - Propósitos Específicos',
    description:
      'Inglês para propósitos específicos. TI, propaganda e marketing, logística, negociações e outros temas específicos.',
    image: '/images/esp.jpg',
    url: 'www.roundenglish.com.br/cursos/propositos-especificos',
  }

  // CourseDetails component variables
  const title = 'Propósitos Específicos'
  const image = 'esp'
  const alt = 'Cursos oferecidos. Inglês para propósitos específicos. TI, propaganda e marketing, logística, negociações e outros temas específicos.'
  const body = [
    'O mercado pede cada vez mais que você seja capaz de trabalhar em parceria com profissionais de outros países e essa comunicação se dá, é claro, em inglês.',
    'Você não pode perder a oportunidade de trabalhar em um grupo profissional internacional só porque você não consegue se comunicar em inglês na sua área de atuação.',
    'Se você deseja aperfeiçoar seu inglês e se capacitar para se relacionar com profissionais de outros países, então os cursos de Inglês para Propósitos Específicos são para você.',
    'Esses são cursos rápidos e focados em praticar o inglês para áreas como TI, propaganda e marketing, logística, negociações e outros temas específicos. As aulas são online, você não precisa perder tempo com deslocamento e temos acesso a um enorme conteúdo de material autêntico disponível na internet.',
  ]
  const button = { label: 'Quero fazer uma entrevista gratuita!', link: '' }

  return (
    <Layout page="esp">
      <SEO meta={localMeta} />
      <CourseDetails
        title={title}
        image={image}
        alt={alt}
        body={body}
        button={button}
      />
    </Layout>
  )
}

export default ESP
