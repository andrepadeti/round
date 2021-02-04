import Card from './card'
import SectionTitle from './sectionTitle'

const Cursos = () => {
  return (
    <>
      <SectionTitle title="Cursos" id='cursos' />
      <h4 className='fw-normal mb-5 w-75 m-auto'>
        Se você quer fechar negócio com o cliente estrangeiro, garantir a
        promoção no trabalho ou ter a oportunidade de viajar, então você está no
        lugar certo! Os cursos são feitos sob medida para atender às suas
        necessidades mais imediatas.
      </h4>
      <Card
        title="Cursos Regulares"
        text="Aulas comunicativas para quem precisa melhorar o inglês para os mais variados fins."
        link=""
        image="general"
      />
      <Card
        title="Propósitos Específicos"
        text="Este curso é para quem precisa aprender a tratar de assuntos como: TI • Bancos • Logística • Contabilidade e outros temas."
        link=""
        image="esp"
      />
      <Card
        title="Exames Internacionais"
        text="Para você se preparar para exames internacionais: TOEFL • IELTS • FCE • CAE • CPE."
        link=""
        image="exams"
      />
      <Card
        title="Presentations / Business Negotiations"
        text="Se você precisa fazer apresentações e negociações em inglês, este é um curso focado no vocabulário e expressões específicos para esses fins."
        link=""
        image="presentations"
      />
    </>
  )
}

export default Cursos
