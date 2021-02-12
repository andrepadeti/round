import Link from 'next/link'

const Advertisement = ({ course }) => {
  return (
    <div className="row row-cols-12 mt-3 mb-5">
      <div className="card bg-lighter d-flex align-items-center p-4 shadow">
        <p>
          Gostou deste exercício? Ele faz parte do curso rápido de {course}.
          Esse é um curso de 30 horas de duração e que foca no vocabulário
          específico para essa área. Quer saber mais sobre o curso?
        </p>
        <div className="mt-3">
          <Link href="/#contato">
            <button className="btn btn-primary shadow">
              Quero fazer uma entrevista gratuita!
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Advertisement
