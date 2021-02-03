import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'
import Image from 'next/image'

const Navigation = () => {
  return (
    <>
      <Navbar className='bg-nav' expand="md">
        <div className="container bg-nav">
          <Navbar.Brand className="d-flex">
            <Image
              src="/images/bare-logo.png"
              alt="logo"
              width={30}
              height={30}
              layout="fixed"
            />
            <span className="ms-1">Round English</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Link href="/index">
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href="/cursos">
                <Nav.Link>Cursos</Nav.Link>
              </Link>
              <Link href="/about">
                <Nav.Link>O Professor</Nav.Link>
              </Link>
              <Link href="/contact">
                <Nav.Link>Contato</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      {/* <style jsx>
        {`
          .container {
            width: 700px;
          }
        `}
      </style> */}
    </>
  )
}

export default Navigation
