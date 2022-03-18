import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import './styles.scss'
import { useHeaderToggled } from '../../../../context'
const CloseButton: React.FC = () => {
  const setToggled = useHeaderToggled()[ 1 ]
  return (
    <div className='d-flex flex-end mobile-menu-close-button'>
      <button aria-label='close modal' onClick={() => {
        setToggled( false )
      }}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  )
}

export default CloseButton