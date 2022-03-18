import React from 'react'
import CloseButton from './components/close-button'
import './styles.scss'
import { useHeaderToggled } from '../../context'
import classnames from 'classnames'
import MenuButton from './components/menu-button'
import MenuItems from './components/menu-items'
import MenuFooter from './components/menu-footer'

const MobileMenu: React.FC = () => {
  const [ toggled ] =  useHeaderToggled()

  return (
    <>
      <MenuButton />
      <div className={classnames( 'mobile-menu', { 'mobile-menu-open' : toggled } )}>
        <CloseButton />
        <MenuItems />
        <MenuFooter />
      </div>
 
    </>
  )
}

export default MobileMenu