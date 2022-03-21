import React from 'react'
import './styles.scss'

const WaveHeroWithImage: React.FC <{
    children?: React.ReactChild,
    src?: string}> = ( { 
      children,
      src 
    } ) => {
      return (
        <div className='wave-hero-with-image'>
          <svg
            preserveAspectRatio="none" 
            x="0px"
            y="0px"
            viewBox="0 0 1920 1080"
            width="100%"
            height="100%"
          >
            <defs>
              <clipPath id="wave-bg-clip-path">
                <path style={{ fill:"#6200F5" }} d="M1919.9,159c-39.8-58.5-257.2-153.4-572.2-158.9c-271.9-4.7-674.3,103.3-979.9,87.7S-2.5,16.5-2.5,16.5L0,921
	h0.5c39.4,58.5,256.9,153.6,572.3,159.1c271.9,4.7,674.3-103.3,979.9-87.7s367.3,71.4,367.3,71.4V921V159H1919.9z"/>
              </clipPath>
            </defs>
            <path style={{ fill:"#6200F5" }} d="M1919.9,159c-39.8-58.5-257.2-153.4-572.2-158.9c-271.9-4.7-674.3,103.3-979.9,87.7S-2.5,16.5-2.5,16.5L0,921
	h0.5c39.4,58.5,256.9,153.6,572.3,159.1c271.9,4.7,674.3-103.3,979.9-87.7s367.3,71.4,367.3,71.4V921V159H1919.9z"/>
            <image preserveAspectRatio='none' clipPath='url(#wave-bg-clip-path)' href={src} x="0" y="0" width="100%" height="100%" />
          </svg>
          {children}
        </div>
      )}

export default WaveHeroWithImage