import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import CourseDetails from '../../components/course-details'

const Exames = () => {
  const title = 'Exames Internacionais'
  const image = 'exams'
  const body = [
    'Muitas empresas e boa parte das universidades exigem que você comprove o seu nível de inglês. Essa comprovação se dá através de exames internacionais como TOEFL, IETLS, CAE e CPE.',
    'Se você vai fazer pós-graduação em uma universidade no exterior, por exemplo, certamente lhe vai ser cobrado um exame internacional. Você não pode perder a chance de fazer uma pós-graduação no exterior por não ter um certificado internacional.',
    'Se você deseja tirar um desses certificados, então o curso de Exames Internacionais é para você.',
    'Nesse curso nós vamos trabalhar as técnicas e dar todas as dicas para que você consiga a pontuação necessária no seu exame. As aulas são online, você não precisa perder tempo com deslocamento e temos acesso a um enorme conteúdo de material autêntico disponível na internet.',
  ]
  const button = { label: 'Quero fazer uma entrevista gratuita!', link: ''}

  return (
    <Layout page="exams">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <CourseDetails title={title} image={image} body={body} button={button} />
    </Layout>
  )
}

export default Exames
