import { useContext } from 'react'
import Modal from 'react-bootstrap/Modal'
import Context from '../context/context'
import Image from 'next/image'

const ContactModal = () => {
  let { modal, setModal } = useContext(Context)

  const handleClick = () => {
    setModal({ show: false })
  }

  return (
    <Modal show={modal.show} onHide={() => setModal({ show: false })} centered>
      <div className="d-flex flex-column align-items-center p-3">
        <div className="d-flex align-items-center mb-3">
          <Image
            src="/images/bare-logo-transparent.png"
            alt="logo"
            width={28}
            height={28}
            layout="fixed"
          />
          <div className='logo'>
            <span className="ms-1 fs-5">R</span>
            <span className="fs-6">OUND</span>
          </div>
        </div>
        <div className="mb-2">
          <p className="text-center">
            {modal.message &&
              modal.message.map((line, index) => (
                <span>
                  {line}
                  <br />
                </span>
              ))}
          </p>
        </div>
        <div>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={handleClick}
          >
            Ok
          </button>
        </div>
      </div>
      <style jsx>
        {`
          button {
            width: 5rem;
          }
          .logo {
            font-weight: 700;
          }
        `}
      </style>
    </Modal>
  )
}

export default ContactModal
