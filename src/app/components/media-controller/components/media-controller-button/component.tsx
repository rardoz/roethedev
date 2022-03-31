import React from 'react'
import { useMediaControllerToggled } from '../../context'
import './styles.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIcons } from '@fortawesome/free-solid-svg-icons/faIcons'

const MediaControllerButton: React.FC = ( { children } ) => {
  const [ , setToggled ] = useMediaControllerToggled()

  return (
    <button
      aria-label='Click to view related media'
      onClick={() => {
        setToggled( true )
      }}
      className='media-controller-button'
    >
      <div className='d-flex flex-center'>
        {children ?? (
          <>
            <FontAwesomeIcon icon={faIcons} />
            <div className='media-controller-label'>
              <div>View</div>
              <div>demo</div>
            </div>
          </>
        )}
      </div>
    </button>
  )
}

export default MediaControllerButton
