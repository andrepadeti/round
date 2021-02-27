import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navigation = () => {
  const [expanded, setExpanded] = useState(false)
  const togglerRef = useRef(null)

  return (
    <>
      <Navbar
        id="navbar"
        className="bg-light nav-border"
        expand="md"
        sticky="top"
        onToggle={() => {
          setExpanded(!expanded)
        }}
        expanded={expanded}
      >
        <div className="container">
          <Link href="/">
            <a className="d-flex navbar-brand logo">
              <Image
                src="/images/bare-logo-transparent.png"
                alt="logo"
                width={30}
                height={30}
                layout="fixed"
              />
              <div>
                <span className="ms-1 fs-4">R</span>
                <span className="fs-5">OUND</span>
              </div>
            </a>
          </Link>
          <Navbar.Toggle
            ref={togglerRef}
            onClick={() => togglerRef.current.blur()}
          >
            <FontAwesomeIcon icon={['fa', `${expanded ? 'times' : 'bars'}`]} />
          </Navbar.Toggle>
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Link href="/#hero" passHref>
                <Nav.Link>
                  <span className="nav-link" onClick={() => setExpanded(false)}>
                    Home
                  </span>
                </Nav.Link>
              </Link>
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
              <Link href="/exercicios" passHref>
                <Nav.Link>
                  <span className="nav-link" onClick={() => setExpanded(false)}>
                    Exercícios
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

          .container {
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
        `}
      </style>
    </>
  )
}

export default Navigation
