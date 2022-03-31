import React, { useRef } from 'react'
import SocialIcons from '../../../../../../../social-icons'
import { useHeaderToggled } from '../../../../context'
import './styles.scss'

const MenuFooter: React.FC = () => {
  const [
    toggled 
  ] = useHeaderToggled()
  const focusRef = useRef() as React.RefObject<HTMLDivElement>
  return (
    <div
      className='mobile-menu-footer'
    >
      <ul
        className='social-icons-list d-flex flex-center'
      >
        <SocialIcons
          inverted
        />
      </ul>
      <div
        ref={focusRef}
        tabIndex={0}
      />
      {
        toggled && (
          <div
            tabIndex={0}
            onFocus={
              ( e ) => {
                e.preventDefault()
                focusRef.current?.focus()
              }
            }
          />
        )
      }
    </div>
  )
}

export default MenuFooter
