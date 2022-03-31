import React from 'react'
import WaveHero from '../../wave-hero'
import WaveHeroTitle from '../../wave-hero/components/wave-hero-title'
import Header from '../../layout/components/header'
import HelmetHead from '../../helmet-head'

const NotFoundPage: React.FC = () => {
  return (
    <>
      <HelmetHead title='404 not found' description='Nothing to see here...' follow={false} />
      <Header />
      <WaveHero>
        <WaveHeroTitle title1='404' title2='not' title3='found' />
      </WaveHero>
    </>
  )
}

export default NotFoundPage
