import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

const color = 'red'

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="row py-3 px-5 justify-content-center align-items-center bg-primary text-light border-bottom">
        {/* <div className="col-md-5 col-sm-12 text-center text-md-left mb-4 mb-md-0">
          <h5 className="mb-0">Siga-nos nas mídias sociais!</h5>
        </div> */}
        <div className="col-md-6 col-sm-12 text-center text-md-left pl-md-5">
          <a
            href="https://www.facebook.com/roundenglish"
            className="me-5 me-md-6 text-light"
          >
            <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/round.english"
            className="me-5 me-md-6 text-light"
          >
            <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/andrepadeti/"
            className="text-light"
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
          </a>
        </div>
      </div>

      <div className="row pt-3 bg-primary text-light justify-content-center border-bottom">
        <div className="col-md-2"></div>
        <div className="col-md-4 col-sm-12 ps-5 ps-md-4 mb-4 mb-md-0">
          <h5 className="logo">
            R<span className="fs-6">OUND</span>
          </h5>
          <hr style={{ width: '60px' }} />
          <p>Desenvolva seu potencial.</p>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-4 col-sm-12 ps-5 ps-md-4">
          <h5>Contato</h5>
          <hr style={{ width: '80px' }} />
          <p>
            <a href="mailto:contato@roundenglish.com.br" className="text-light">
              <FontAwesomeIcon icon={['fa', 'envelope']} className="me-2" />
              contato@roundenglish.com.br
            </a>
          </p>
          <p>
            <FontAwesomeIcon icon={['fab', 'whatsapp']} className="me-2" />
            (11) 96308.9663
          </p>
        </div>
      </div>

      <div className="row py-3 bg-primary text-light">
        <div className="d-flex justify-content-center">
          <div>
            Copyright &#169; {new Date().getFullYear()}
            <a href="mailto:andrepadeti@hotmail.com" className="text-light">
              <FontAwesomeIcon icon={['fa', 'envelope']} className="mx-2" />
              <Image
                src="/images/avatar.png"
                width={18}
                height={18}
                layout="fixed"
                className="rounded-circle"
              />
              <span className="ms-2">André Padeti</span>
            </a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: hsl(51, 21%, 94%);
          }

          .logo {
            letter-spacing: 1px;
          }
        `}
      </style>
    </footer>
  )
}

export default Footer
