import React from 'react'
import Section from '../section'
import WaveContainer from '../wave-container'

const WaveHero: React.FC = ( { children } ) => {
  return (
    <div>
      <WaveContainer>
        <Section>{children}</Section>
      </WaveContainer>
    </div>
  )
}

export default WaveHero
