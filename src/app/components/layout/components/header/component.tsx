import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import './styles.scss'
import { useInView } from 'react-intersection-observer'
import logo from './assets/logo.svg'
import SocialIcons from "../../../social-icons/component"
import MobileMenu from "./components/mobile-menu"
import { HeaderContext } from "./context"

const Header: React.FC<{forceInView?: boolean}> = ( { forceInView = false } ) => {
  const { ref, inView } = useInView( {
    threshold: 1
  } )

  useEffect( () => {
    if( !inView || forceInView ) {
      document.body.classList.add( "nav-shadow" )
    } else {
      document.body.classList.remove( "nav-shadow" )
    }
  }, [ inView, forceInView ] )

  return (
    <>
      <span ref={ref} className="nav-observer" />
      <header className="app-nav">
        <nav className="d-flex flex-center">
          <Link to="/" aria-label="Logo" className="app-logo">
            <img src={logo} width="200"/>
          </Link>
          <ul className="nav-link-bank">
            <SocialIcons className="d-none-medium-or-less" />
            <li className="mobile-menu-nav-link">
              <HeaderContext>
                <MobileMenu />
              </HeaderContext>
            </li>
          </ul>
        </nav>
      </header>
      
    </>
  )
}

export default Header
