import Card from "./card"

const Cursos = () => {
  return (
    <>
      <h1>Nossos Cursos</h1>
      <div className="row">
        <Card title='Cursos Regulares' text='Aulas comunicativas para quem precisa melhorar o inglês para os mais variados fins.' link='' image='general' />
        <Card title='Propósitos Específicos' text='Este curso é para quem precisa aprender a tratar de assuntos como: TI • Bancos • Logística • Contabilidade e outros temas.' link='' image='esp' />
        <Card title='Exames Internacionais' text='Para você se preparar para exames internacionais: TOEFL • IELTS • FCE • CAE • CPE.' link='' image='exams' />
        <Card title='Presentations / Business Negotiations' text='Se você precisa fazer apresentações e negociações em inglês, este é um curso focado no vocabulário e expressões específicos para esses fins.' link='' image='presentations' />
      </div>
    </>
  )
}

export default Cursos
