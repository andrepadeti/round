import SectionTitle from './sectionTitle'
import Form from './form'
import global from '../src/global'

const Contact = () => {
  return (
    <>
      <SectionTitle title="Contato" id="contato" />
      <div className="row">
        <div className="col-12 col-md-8 m-auto">
          <p className="fs-5 mb-5">
            Entre em contato e agende uma entrevista para saber mais detalhes
            sobre o curso e fazer um teste de nível gratuitamente. Envie um
            email para{' '}
            <a href="mailto:contato@roundenglish.com.br">
              contato@roundenglish.com.br
            </a>
            , me mande uma <a href={global.whatsapp}>mensagem pelo WhatsApp</a>{' '}
            ou utilize este formulário:
          </p>
        </div>
      </div>
      <Form />
    </>
  )
}

export default Contact
