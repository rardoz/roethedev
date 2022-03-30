import React from 'react'
import WaveHero from '../../../../wave-hero'
import Tiers from './components/tiers'
import SectionTitle from '../../../../section-title'

const PreSignupForm: React.FC = () => {
  return  (
    <WaveHero>
      <SectionTitle>
        Online lessons
      </SectionTitle>
      <Tiers />
    </WaveHero>
  )
}

export default PreSignupForm