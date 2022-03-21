import React from 'react'
import WaveHero from '../../wave-hero'
import WaveHeroTitle from '../../wave-hero/components/wave-hero-title'
import { Helmet } from "react-helmet-async"
import Header from '../../layout/components/header'

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 not found</title>
        <meta name='description' content="Nothing to see here..." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <Header />
      <WaveHero>
        <WaveHeroTitle title1='404' title2='not' title3='found' />
      </WaveHero>
    </>
  )
}

export default NotFoundPage