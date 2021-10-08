import Link from 'next/link'
import global from 'src/global'

const Advertisement = ({ course, button }) => {
  // Inglês para TI has expecific copy, button message and button link
  let copy, localButton
  if (course === global.exercicios.section.it) {
    copy = `Gostou deste exercício? Ele faz parte do curso de Inglês para TI. Esse curso é feito para você, desenvolvedor, e foca nos tópicos específicos para a área de TI. Quer saber mais sobre o curso?`
    localButton = {
      label: 'Quero saber mais sobre o curso Inglês para TI!',
      link: '/cursos/inglesparati',
    }
  } else {
    copy = `Gostou deste exercício? Ele faz parte do curso rápido de ${course}. Esse é um curso de 30 horas de duração e que foca no vocabulário específico para essa área. Quer saber mais sobre o curso?`
    localButton = button
  }

  return (
    <div className="row row-cols-12 mt-5 mb-5">
      <div className="card bg-lighter d-flex align-items-center p-4 shadow">
        <p>{copy}</p>
        <div className="mt-3">
          <Link href={localButton.link}>
            <button className="btn btn-red text-light shadow">
              {localButton.label}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Advertisement
