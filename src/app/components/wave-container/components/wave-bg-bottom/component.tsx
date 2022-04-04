/* eslint-disable max-len */
import React from 'react'
const WaveBgBottom: React.FC<{fill?: string}> = ( { fill = 'var(--app-primary-color, #6200F5)' } ) => {
  return (
    <svg 
      preserveAspectRatio="none"
      x="0px"
      y="0px"
      viewBox="0 0 1920 1080"
      xmlSpace="preserve"
    >
      <path
        style={
          {
            fill 
          }
        }
        d="M1919.9,159c-39.8-58.5-257.2-153.4-572.2-158.9c-271.9-4.7-674.3,103.3-979.9,87.7
   S-2.5,16.5-2.5,16.5l3,1063.5h1923L1919.9,159L1919.9,159z"
      />
    </svg>

  )
}

export default WaveBgBottom