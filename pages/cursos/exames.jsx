import SEO, { meta } from '../../components/SEO'
import Layout from '../../components/layout'
import CourseDetails from '../../components/course-details'
import global from 'src/global'

const Exames = () => {
  // meta tags
  const localMeta = {
    ...meta,
    title: 'Round English - Cursos - Exames Internacionais',
    description:
      'Curso de inglês preparatório para exames internacioanis. FCE, CAE, CPE, TOELF, IELTS.',
    image: '/images/exams.jpg',
    url: 'www.roundenglish.com.br/cursos/exames',
  }

  // CourseDetails component variables
  const title = 'Exames Internacionais'
  const image = 'exams'
  const alt =
    'Cursos oferecidos. Curso de inglês preparatório para exames internacioanis. FCE, CAE, CPE, TOELF, IELTS.'
  const body = [
    'Muitas empresas e boa parte das universidades exigem que você comprove o seu nível de inglês. Essa comprovação se dá através de exames internacionais como TOEFL, IETLS, CAE e CPE.',
    'Se você vai fazer pós-graduação em uma universidade no exterior, por exemplo, certamente lhe vai ser cobrado um exame internacional. Você não pode perder a chance de fazer uma pós-graduação no exterior por não ter um certificado internacional.',
    'Se você deseja tirar um desses certificados, então o curso de Exames Internacionais é para você.',
    'Nesse curso nós vamos trabalhar as técnicas e dar todas as dicas para que você consiga a pontuação necessária no seu exame. As aulas são online, você não precisa perder tempo com deslocamento e temos acesso a um enorme conteúdo de material autêntico disponível na internet.',
  ]
  const button = { label: global.cursos.button.label, link: '' }

  return (
    <Layout page="exams">
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

export default Exames
