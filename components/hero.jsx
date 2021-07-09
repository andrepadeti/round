import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="fix-scroll" id="hero">
      <div className="container-main">
        <Image
          className="z-index-0 clip-path"
          src="/images/hero2.jpg"
          objectFit="cover"
          layout="fill"
          alt="Aulas de inglês personalizadas. Estude com um professor com mais de 20 anos de experiência e com certificação pela Universidade de Cambridge."
        />
        <div className="row align-items-center vh-100 z-index-1">
          <div className="col-12 col-md-6 mb-5 py-2 px-4 overlay">
            <div>
              <h1>Desenvolva seu potencial.</h1>
              <p>
                Venha estudar inglês com quem tem mais de 20 anos de experiência
                formando alunos para o mercado de trabalho.
              </p>
              <Link href="/#contato">
                <button type="button" className="btn btn-dark btn-lg shadow">
                  Agende uma entrevista
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          h1 {
            font-weight: 900;
            color: hsl(243, 21%, 94%);
          }

          p {
            color: hsl(243, 21%, 94%);
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
