import React from 'react'
import AppLink from '../../../../../../../app-link'
import './styles.scss'
const MenuItems: React.FC = () => {
  return (
    <ul className='mobile-menu-items'>
      <li>
        <AppLink to='/portfolio' inverted size='xxl'>
          Portfolio
        </AppLink>
      </li>
      <li>
        <AppLink to='/blog' inverted size='xxl'>
          Blog
        </AppLink>
      </li>
      <li>
        <AppLink to='/about' inverted size='xxl'>
          About Roe
        </AppLink>
      </li>
    </ul>
  )
}

export default MenuItems
