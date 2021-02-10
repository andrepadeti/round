import Link from 'next/link'

const Advertisement = ({ course }) => {
  return (
    <div className="row justify-content-center pt-3 pb-5">
      <p>
        Gostou deste exercício? Ele faz parte do curso rápido de Propaganda e
        Marketing. Esse é um curso de 30 horas de duração e que foca no
        vocabulário específico para essa área. Quer saber mais sobre o curso?
      </p>
      <div className="w-75 mt-3">
        <Link href="/#contato">
          <button className="btn btn-primary shadow">
            Quero fazer uma entrevista gratuita!
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Advertisement
