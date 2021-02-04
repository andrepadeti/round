import Image from 'next/image'

const Hero = () => {
  return (
    <div id='hero' className="d-flex flex-wrap flex-md-nowrap justify-content-center align-items-center p-3">
      <div className="flex-shrink-1 py-5 text-center text-md-start">
        <h2>Inglês para toda a vida.</h2>
        <p>
          Venha estudar inglês com quem tem mais de 20 anos de experiência
          formando alunos para o mercado.
        </p>
        <button type="button" className="btn btn-primary text-light btn-lg">
          Saiba mais
        </button>
      </div>
      <div className="w-100">
        <Image
          src="/images/hero.svg"
          layout="responsive"
          width={350}
          height={350}
        />
      </div>
      <style jsx>
        {`
          h2 {
            // font-family: 'Montserrat', sans-serif;
            font-weight: 900;
          }
        `}
      </style>
    </div>
  )
}

export default Hero
