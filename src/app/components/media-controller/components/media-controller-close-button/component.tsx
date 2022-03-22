import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import './styles.scss'
import { useMediaControllerToggled } from '../../context'

const MediaControllerCloseButton: React.FC = () => {
  const [ toggled,
    setToggled ] = useMediaControllerToggled()
  const closeButtonRef = useRef() as React.RefObject<HTMLButtonElement>
  return (
    <div className='d-flex flex-end media-controller-close-button'>
      {toggled && <div tabIndex={0} onFocus={( e ) => {
        e.preventDefault()
        closeButtonRef.current?.focus()
      }} />}
      
      <button ref={closeButtonRef} aria-label='close modal' onClick={() => {
        setToggled( false )
      }}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  )
}

export default MediaControllerCloseButton