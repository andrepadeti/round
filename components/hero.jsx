import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="fix-scroll" id="hero">
      <div className="row flex-md-nowrap justify-content-center align-items-center p-3">
        <div className="col-12 col-md-6 py-5 text-center text-md-start">
          <h2>Desenvolva seu potencial.</h2>
          <p>
            Venha estudar inglês com quem tem mais de 20 anos de experiência
            formando alunos para o mercado.
          </p>
          <Link href="/#contato">
            <button
              type="button"
              className="btn btn-primary text-light btn-lg shadow"
            >
              Agende uma entrevista
            </button>
          </Link>
        </div>
        <div className="col-12 col-md-6">
          <Image
            src="/images/hero.svg"
            layout="responsive"
            width={350}
            height={350}
          />
        </div>
      </div>
      <style jsx>
        {`
          h2 {
            font-weight: 900;
          }

          // this is a tweak for the a href scrolling positioning
          // https://css-tricks.com/hash-tag-links-padding/
          .fix-scroll::before {
            display: block;
            content: ' ';
            margin-top: -285px;
            height: 285px;
            visibility: hidden;
            pointer-events: none;
          }
        `}
      </style>
    </div>
  )
}

export default Hero
