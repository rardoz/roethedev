import React from 'react'
import classnames from 'classnames'
import { useMediaControllerToggled } from '../../context'
import './styles.scss'

const MediaControllerToggle: React.FC = ( { children } ) => {
  const [ toggled ] = useMediaControllerToggled()
  return <div className={classnames( 'media-controller',
    { 'media-controller-open': toggled } )}>{children}</div>
}

export default MediaControllerToggle
