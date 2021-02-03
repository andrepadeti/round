import Image from 'next/image'
import SectionTitle from './sectionTitle'

const Profile = () => {
  return (
    <>
      <SectionTitle title="O Professor" />
      <div className="d-flex flex-wrap flex-md-nowrap justify-content-center align-items-start align-items-md-center p-3">
        <div className="flex-shrink-1 pe-2">
          <p>Olá,</p>
          <p>
            Eu sou o André Padeti, professor de inglês há pouco mais de 20 anos.
          </p>
          <p>
            Comecei a lecionar depois de estudar inglês por muitos anos no
            Brasil e em Londres, na Inglaterra, onde morei por 1 ano. Por 10
            anos eu fui professor de inglês em escolas de idiomas e coordenador
            pedagógico no CNA. Nesse período eu prestei as provas para os exames
            internacionais de inglês da Universidade de Cambridge: o Cambridge
            B2 First (FCE) e o Cambridge C1 Advanced (CAE).
          </p>
          <p>
            Fui estudante de Computação na USP São Carlos. Foi nessa época que
            comecei a dar aulas particulares de inglês voltado para negócios
            para os auditores da empresa de auditoria KPMG. De São Carlos eu me
            mudei para Brisbane, na Austrália, onde fiquei por mais 1 ano e fiz
            um curso de Business Management (Level 1 no Australian
            Qualifications Framework).
          </p>
          <p>
            A partir de então eu me especializei em aulas particulares para
            adultos, de Business English para executivos e também preparatórios
            de exames internacionais como TOEFL, IELTS e os exames de Cambridge.
          </p>
          <p>
            Passei com nota máxima no exame de proficiência Cambridge C2
            Proficiency (CPE), que é o exame de proficiência na língua inglesa
            de mais alto nível que há. Tenho também o certificado do curso
            CELTA, da Universidade de Cambridge, que é um certificado
            reconhecido internacionalmente e que capacita professores de inglês
            a dar aulas para adultos em qualquer parte do mundo.
          </p>
          <p>
            Atualmente também preparo alunos para o Cambridge C2 Proficiency na
            escola de idiomas Seven.
          </p>
          <p>
            Sou membro da Braz-Tesol, a associação brasileira de professores de
            inglês, onde participo de congressos e outros eventos para reciclar
            o conhecimento e poder oferecer o melhor curso para você!
          </p>
          <p>
            Este é o meu{' '}
            <a href="https://www.linkedin.com/in/andrepadeti/">LinkedIn</a>.
          </p>
        </div>
        <div className="w-100">
          <Image src="/images/myself.jpg" width={1449} height={1631} className='img-thumbnail' />
        </div>
      </div>
    </>
  )
}

export default Profile
