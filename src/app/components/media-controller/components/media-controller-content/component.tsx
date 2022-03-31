import React from 'react'
import './styles.scss'
import { useMediaControllerToggled } from '../../context'

const MediaControllerContent: React.FC = ( { children } ) => {
  const [
    toggled 
  ] = useMediaControllerToggled()
  return toggled ? <div
    className='media-controller-content'
  >
    {children}
  </div> : <></>
}

export default MediaControllerContent
