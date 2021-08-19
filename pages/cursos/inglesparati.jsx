import Link from 'next/link'
import Image from 'next/image'

import SEO, { meta } from 'components/SEO'
import Layout from 'components/layout'
import global from 'src/global'

const Inglesparati = () => {
  // meta tags
  const localMeta = {
    ...meta,
    title: 'Round English - Cursos - Inglês para TI',
    description:
      'Inglês para TI. Não perca mais oportunidades de trabalho no exterior!',
    image: '/images/it.jpg',
    url: 'www.roundenglish.com.br/cursos/inglesparati',
  }

  return (
    <Layout page="inglesparati">
      <SEO meta={localMeta} />

      <div className="container">
        <div className="row justify-content-center align-items-center my-5">
          <div className="col-12 col-md-6 text-center text-md-start">
            <h1>Inglês para TI</h1>
          </div>
          <div className="col-12 col-md-6">
            <Image
              src={`/images/it.svg`}
              alt="Inglês para TI"
              width={350}
              height={350}
              layout="responsive"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 m-auto">
            <p>
              Quantos colegas de trabalho você conhece com vasta experiência na
              área, com cargos pleno e sênior, recebendo propostas para
              trabalhar no exterior e sendo forçados a recusar por não
              conseguirem se comunicar bem em inglês?
            </p>
            <p>Será que isso já não aconteceu com você?</p>
            <p>
              E aquele seu colega recém-formado, desenvolvedor júnior, falando
              inglês fluentemente, trabalhando para empresas estrangeiras,
              vivendo como um nômade digital e ganhando em dólares!
            </p>
            <p>Esse pode ser você!</p>
            <p>Se você precisa:</p>
            <ul>
              <li>
                Comunicar-se com fluência utilizando vocabulário da área de TI
              </li>
              <li>
                Sentir-se mais confiante no momento de fazer uma entrevista de
                emprego em TI
              </li>
              <li>
                Fazer apresentações corporativas e para conferências na área de
                TI
              </li>
              <li>
                Conduzir entrevistas em inglês de candidatos para cargos na área
                de TI
              </li>
            </ul>
            <p>Este curso vai te ajudar a alcançar seus objetivos!</p>

            <div className="d-flex justify-content-center mt-5">
              <Link href="/#contato">
                <button className="btn btn-lg btn-red text-light shadow">
                  {global.cursos.button.label}
                </button>
              </Link>
            </div>

            <h2>O curso</h2>
            <p>
              Você vai fazer aulas ao vivo e online (via Zoom) com um professor.
              Não é um curso gravado! Você vai praticar a fala, a audição, a
              leitura e a escrita sempre no contexto da área da Tecnologia da
              Informação. Veja alguns dos assuntos que vamos abordar:
            </p>
            <ul>
              <li>O trabalho na área de TI</li>
              <li>Sistemas computacionais</li>
              <li>Websites</li>
              <li>Bancos de dados</li>
              <li>Desenvolvimento de software</li>
              <li>E-commerce</li>
              <li>Redes de computadores</li>
              <li>Suporte de TI</li>
              <li>Segurança de TI</li>
              <li>Comunicação de dados</li>
              <li>Administração de sistemas (sysadmin)</li>
              <li>Interações (videoconferências e treinamento de usuários)</li>
            </ul>
            <h2>O professor</h2>
            <p>
              Olá, desenvolvedor! Eu sou André Padeti, professor de inglês há
              mais de 20 anos. Minha especialidade é em aulas particulares para
              adultos. Sou certificado como professor de inglês pela
              Universidade de Cambridge. Fui estudante do curso de computação da
              Universidade de São Paulo (ICMC-USP) e também sou desenvolvedor
              web. <Link href="/#about">Mais detalhes.</Link>
            </p>

            <div className="d-flex justify-content-center m-5">
              <Link href="/#contato">
                <button className="btn btn-lg btn-red text-light shadow">
                  {global.cursos.button.label}
                </button>
              </Link>
            </div>

            <p className='mb-5'>
              O mercado de trabalho em TI é internacional, feito em parceria com
              profissionais de outros países e a comunicação se dá, é claro, em
              inglês. Se você fosse um advogado e quisesse trabalhar para fora
              do Brasil, seu diploma valeria muito pouco. Cada país tem as suas
              leis. Isso não é verdade para a área de TI! Você já tem a
              experiência que vale em qualquer lugar do mundo. Não dá para
              continuar perdendo oportunidades de trabalho só porque você ainda
              não consegue se falar inglês.
            </p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          h2 {
            margin-block-start: 4rem;
            margin-block-end: 1.5rem;
          }
        `}
      </style>
    </Layout>
  )
}

export default Inglesparati
