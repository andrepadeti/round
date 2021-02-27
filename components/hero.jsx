import Image from 'next/image'
import Link from 'next/link'

// TODO: use next/image to make picture smaller to load
// https://nextjs.org/docs/api-reference/next/image -> background image

const Hero = () => {
  return (
    <div className="hero fix-scroll" id="hero">
      <div className="container-main">
        <div className="row align-items-center vh-100">
          <div className="message col-12 col-md-6 py-2 px-4">
            <div>
              <h1>Desenvolva seu potencial.</h1>
              <p>
                Venha estudar inglês com quem tem mais de 20 anos de experiência
                formando alunos para o mercado de trabalho.
              </p>
              <Link href="/#contato">
                <button type="button" className="btn btn-primary btn-lg shadow">
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

          .bgWrap {
            position: fixed;
            height: 100vh;
            width: 100vw;
            overflow: hidden;
            z-index: -1;
          }

          .message {
            // backdrop-filter: blur(2px);
            background-color: hsla(243, 100%, 4%, 0.2);
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
