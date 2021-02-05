import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'
import Image from 'next/image'

const Navigation = () => {
  return (
    <>
      <Navbar className='bg-light' expand="md" sticky='top'>
        <div className="container bg-nav">
          <Navbar.Brand className="d-flex">
            <Image
              src="/images/bare-logo.png"
              alt="logo"
              width={30}
              height={30}
              layout="fixed"
            />
            <span className="ms-1 logo">Round English</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Link href="#hero" passHref>
                <Nav.Link><span className="nav-link">Home</span></Nav.Link>
              </Link>
              <Link href="#cursos" passHref>
                <Nav.Link><span className='nav-link'>Cursos</span></Nav.Link>
              </Link>
              <Link href="#about" passHref>
                <Nav.Link><span className='nav-link'>O Professor</span></Nav.Link>
              </Link>
              <Link href="#contato" passHref>
                <Nav.Link><span className='nav-link'>Contato</span></Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <style jsx>
        {`
          .nav-link {
            font-family: 'Montserrat', sans-serif;
            font-weight: 900;
            // color: #6c63ff !important;
          }

          .nav-link:hover {
            color: #2b2b55 !important;
          }

          .logo {
            font-weight: 700;
            // color: #6c63ff;
          }
        `}
      </style>
    </>
  )
}

export default Navigation