/* eslint-disable max-len */
import React from 'react'

const WaveBgMobile: React.FC<{fill?: string}> = ( { fill = 'var(--app-primary-color, #6200F5)'  } ) => {
  return (
    <svg
      preserveAspectRatio="none" 
      x="0px"
      y="0px"
      viewBox="0 0 800 2079"
      xmlSpace="preserve"
    >
      <path
        style={
          {
            fill 
          }
        }
        d="M0-0.283c0,0,117.136,47.783,228.5,47.783c161,0,222-37,363-37c137,0,208.5,71.035,208.5,71.035V2079
	c0,0-102.144-72.448-241.5-71.5c-147,1-198.223,40.576-360.5,43.5c-111,2-198-39.991-198-39.991V-0.283z"
      />
    </svg>
  )
}

export default WaveBgMobile