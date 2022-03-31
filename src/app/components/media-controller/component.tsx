import React from 'react'
import { MediaControllerContextProvider } from './context'
import MediaControllerButton from './components/media-controller-button'
import MediaControllerContent from './components/media-controller-content'
import MediaControllerCloseButton from './components/media-controller-close-button'
import MediaControllerFooter from './components/media-controller-footer'
import MediaControllerToggle from './components/media-controller-toggle'

const MediaController: React.FC = ( { children } ) => {
  return (
    <MediaControllerContextProvider>
      <MediaControllerButton />
      <MediaControllerToggle>
        <MediaControllerCloseButton />
        <MediaControllerContent>{children}</MediaControllerContent>
        <MediaControllerFooter />
      </MediaControllerToggle>
    </MediaControllerContextProvider>
  )
}
export default MediaController
