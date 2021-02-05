import Card from './card'
import SectionTitle from './sectionTitle'

const Cursos = () => {
  return (
    <>
      <SectionTitle title="Cursos" id="cursos" />
      <div className="row">
        <div className="col-12 col-md-8 m-auto">
          <p className="fs-5 mb-5">
            Se você quer fechar negócio com o cliente estrangeiro, garantir a
            promoção no trabalho ou ter a oportunidade de viajar, então você
            está no lugar certo! Os cursos são feitos sob medida para atender às
            suas necessidades mais imediatas.
          </p>
        </div>
      </div>
      <Card
        title="Cursos Regulares"
        text="Aulas comunicativas para quem precisa melhorar o inglês para os mais variados fins."
        link="/cursos/cursos-regulares"
        image="general"
      />
      <Card
        title="Propósitos Específicos"
        text="Este curso é para quem precisa aprender a tratar de assuntos como: TI • Bancos • Logística • Contabilidade e outros temas."
        link="/cursos/propositos-especificos"
        image="esp"
      />
      <Card
        title="Exames Internacionais"
        text="Para você se preparar para exames internacionais: TOEFL • IELTS • FCE • CAE • CPE."
        link="/cursos/exames"
        image="exams"
      />
      <Card
        title="Presentations / Business Negotiations"
        text="Se você precisa fazer apresentações e negociações em inglês, este é um curso focado no vocabulário e expressões específicos para esses fins."
        link="/cursos/presentations"
        image="presentations"
      />
    </>
  )
}

export default Cursos
