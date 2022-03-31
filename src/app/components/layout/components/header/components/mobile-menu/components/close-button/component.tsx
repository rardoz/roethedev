import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import './styles.scss'
import { useHeaderToggled } from '../../../../context'
const CloseButton: React.FC = () => {
  const [ toggled,
    setToggled ] = useHeaderToggled()
  const closeButtonRef = useRef() as React.RefObject<HTMLButtonElement>
  return (
    <div className='d-flex flex-end mobile-menu-close-button'>
      {toggled && (
        <div
          tabIndex={0}
          onFocus={( e ) => {
            e.preventDefault()
            closeButtonRef.current?.focus()
          }}
        />
      )}

      <button
        ref={closeButtonRef}
        aria-label='close modal'
        onClick={() => {
          setToggled( false )
        }}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  )
}

export default CloseButton
