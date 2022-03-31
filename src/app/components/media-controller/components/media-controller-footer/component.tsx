import React, { useRef } from 'react'
import { useMediaControllerToggled } from '../../context'
import './styles.scss'

const MediaControllerFooter: React.FC = ( { children } ) => {
  const [ toggled ] = useMediaControllerToggled()
  const focusRef = useRef() as React.RefObject<HTMLDivElement>
  return (
    <div className='media-controller-footer'>
      {children}
      <div ref={focusRef} tabIndex={0} />
      {toggled && (
        <div
          tabIndex={0}
          onFocus={( e ) => {
            e.preventDefault()
            focusRef.current?.focus()
          }}
        />
      )}
    </div>
  )
}

export default MediaControllerFooter
