import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import './styles.scss'
import { useInView } from 'react-intersection-observer'
import logo from './assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faNpm } from '@fortawesome/free-brands-svg-icons/faNpm'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faFile } from '@fortawesome/free-solid-svg-icons'

const Header: React.FC = () => {
  const { ref, inView } = useInView( {
    threshold: 1
  } )

  useEffect( () => {
    if( !inView ) {
      document.body.classList.add( "nav-shadow" )
    } else {
      document.body.classList.remove( "nav-shadow" )
    }
  }, [ inView ] )

  return (
    <>
      <span ref={ref} className="nav-observer" />
      <header className="app-nav">
        <nav className="d-flex flex-center">
          <Link to="/" aria-label="Logo" className="app-logo">
            <img src={logo} width="200"/>
          </Link>
          <ul className="nav-link-bank">
            <li>
              <a title="github" href="https://github.com/rardoz" target="_blank" aria-label="link to github"><FontAwesomeIcon icon={faGithub} /></a>
            </li>
            <li>
              <a title="npm" href="https://www.npmjs.com/~rardoz" target="_blank" aria-label="link to npm"><FontAwesomeIcon icon={faNpm} /></a>
            </li>
            <li>
              <a title="Email" href="mailto:robert@byrojo.com?subject=Hello Roe!" aria-label="link to email"><FontAwesomeIcon icon={faEnvelope} /></a>
            </li>
            <li>
              <a title="Linkedin" href="https://linkedin.com/in/rardoz" aria-label="link to linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
            <li>
              <a
                title="Resume"
                href="https://roe-files.s3.amazonaws.com/Roe-Greene-Resume.pdf"
                aria-label="download resume"
                download>
                <FontAwesomeIcon icon={faFile} />
              </a>
            </li>
          </ul>
        </nav>
      </header>

    </>
  )
}

export default Header
