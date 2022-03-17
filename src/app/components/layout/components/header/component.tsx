import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import './styles.scss'
import { useInView } from 'react-intersection-observer'
import logo from './assets/logo.svg'

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
        <nav>
          <Link to="/" aria-label="Logo" className="app-logo">
            <img src={logo} width="200"/>
          </Link>

        </nav>
      </header>

    </>
  )
}

export default Header
