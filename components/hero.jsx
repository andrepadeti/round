import Image from 'next/image'

const Hero = () => {
  return (
    <div className="d-flex flex-wrap flex-md-nowrap justify-content-center align-items-center">
      <div className="flex-shrink-1 py-5 text-center text-md-start">
        <h2>Inglês para toda a vida.</h2>
        {/* <p>
          Se você quer fechar negócio com o cliente estrangeiro, garantir a
          promoção no trabalho ou ter a oportunidade de viajar, então você está
          no lugar certo! Aqui os cursos são feitos sob medida para atender às
          suas necessidades mais imediatas.
        </p> */}
        <p>Venha estudar inglês com quem tem mais de 20 anos de experiência formando alunos para o mercado.</p>
        <button type="button" className="btn btn-primary btn-lg">
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
    </div>
  )
}

export default Hero
