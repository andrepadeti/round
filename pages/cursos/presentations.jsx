import SEO, { meta } from '../../components/SEO'
import Layout from '../../components/layout'
import CourseDetails from '../../components/course-details'
import global from 'src/global'

const Presentations = () => {
  // meta tags
  const localMeta = {
    ...meta,
    title: 'Round English - Cursos - Presentations/ Negotiations',
    description:
      'Curso de inglês para Business Presentations e Business Negotiations.',
    image: '/images/presentations.jpg',
    url: 'www.roundenglish.com.br/cursos/presentations',
  }

  // CourseDetails component variables
  const title = 'Presentations/ Negotiations'
  const image = 'presentations'
  const alt =
    'Cursos oferecidos. Curso de inglês para Business Presentations e Business Negotiations.'
  const body = [
    'É cada vez mais comum que as apresentações corporativas, videoconferências e negociações sejam em inglês.',
    'Você não pode perder a oportunidade de se destacar nesses eventos por não estar preparado para usar seu inglês nesses contextos.',
    'Se você deseja participar mais ativamente dessas atividades na empresa e mostrar todo o seu potencial nessas situações, então os cursos English for Negotiating e English for Presentations são para você.',
    'Estes são cursos de curta duração e focados em praticar o inglês usado especificamente nessas ocasiões. As aulas são online, você não precisa perder tempo com deslocamento e temos acesso a um enorme conteúdo de material autêntico disponível na internet.',
  ]
  const button = { label: global.cursos.button.label, link: '' }

  return (
    <Layout page="presentations">
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

export default Presentations
