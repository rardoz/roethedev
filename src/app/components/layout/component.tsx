import React from 'react'
import Footer from './components/footer'

const Layout: React.FC = ( { children } ) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}

export default Layout