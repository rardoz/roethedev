import React from 'react'
import { useHeaderToggled } from '../../../../context'
import mobilemMenuButtonImg from './assets/mobile-menu-icon.svg'
import './styles.scss'

const MenuButton: React.FC = () => {
  const setToggled = useHeaderToggled()[ 1 ]

  return (
    <button onClick={() => setToggled( true )} className='header-mobile-menu-button'>
      <img width='33px' height='33px' src={mobilemMenuButtonImg} />
    </button>
  )
}

export default MenuButton
