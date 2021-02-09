import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
// import { NavDropdown } from 'react-bootstrap'

const Navigation = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <Navbar
        id="navbar"
        className="bg-light shadow"
        expand="md"
        sticky="top"
        onToggle={() => {
          setExpanded(!expanded)
        }}
        expanded={expanded}
      >
        <div className="container">
          <Link href="/">
            <a className="d-flex navbar-brand">
              <Image
                src="/images/bare-logo-transparent.png"
                alt="logo"
                width={30}
                height={30}
                layout="fixed"
              />
              <span className="ms-1 logo">Round English</span>
            </a>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Link href="/#hero" passHref>
                <Nav.Link>
                  <span className="nav-link" onClick={() => setExpanded(false)}>
                    Home
                  </span>
                </Nav.Link>
              </Link>
              {/* <NavDropdown title='Cursos' id='cursos' className='cursos'>
                <NavDropdown.Item>Regulares</NavDropdown.Item>
                <NavDropdown.Item>Propósitos Específicos</NavDropdown.Item>
                <NavDropdown.Item>Exames Internacionais</NavDropdown.Item>
                <NavDropdown.Item>Presentations/Negotiations</NavDropdown.Item>
              </NavDropdown> */}
              <Link href="/#cursos" passHref>
                <Nav.Link>
                  <span className="nav-link" onClick={() => setExpanded(false)}>
                    Cursos
                  </span>
                </Nav.Link>
              </Link>
              <Link href="/#about" passHref>
                <Nav.Link>
                  <span className="nav-link" onClick={() => setExpanded(false)}>
                    O Professor
                  </span>
                </Nav.Link>
              </Link>
              <Link href="/#contato" passHref>
                <Nav.Link>
                  <span className="nav-link" onClick={() => setExpanded(false)}>
                    Contato
                  </span>
                </Nav.Link>
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

          container {
            background-color: inherit;
          }

          .cursos {
            font-family: 'Montserrat', sans-serif;
            font-weight: 900;
            // color: #6c63ff !important;
          }

          .nav-link:hover {
            color: #2b2b55 !important;
          }

          .logo {
            font-weight: 800;
            color: inherit;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
