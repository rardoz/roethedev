import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import './styles.scss'
import { useInView } from 'react-intersection-observer'

const Header: React.FC = () => {
  const { ref, inView } = useInView()

  useEffect( () => {
    if( !inView ) {
      document.body.classList.add( "nav-shadow" )
    } else {
      document.body.classList.remove( "nav-shadow" )
    }
  }, [ inView ] )

  return (
    <>
      
      <header className="app-nav">
        <nav>
          <Link to="/" aria-label="Logo">
            <h1 className="app-logo">
              <small>•</small>Roe <small>the</small> Dev<small>•</small>
            </h1>
          </Link>
        </nav>
      </header>
      <span ref={ref} className="nav-observer" />
    </>
  )
}

export default Header
