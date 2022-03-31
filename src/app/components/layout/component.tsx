import React, { useEffect } from 'react'
import Footer from './components/footer'

import { useLocation } from 'react-router-dom'
import usePageView from '../../hooks/use-page-view'

const Layout: React.FC = ( { children } ) => {
  const location = useLocation()

  useEffect( () => {
    window.scrollTo( { top: 0 } )
  },
  [ location ] )

  usePageView()

  return (
    <>
      {children}
      <Footer />
    </>
  )
}

export default Layout
