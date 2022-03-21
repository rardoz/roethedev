import React from 'react'
import { CMSContextProvider } from '../../../context/cms'
import WaveHero from '../../wave-hero'
import WaveHeroTitle from '../../wave-hero/components/wave-hero-title'
import { Helmet } from "react-helmet-async"
import './styles.scss'
import PortfolioFeed from '../home/components/portfolio-feed'
import Header from '../../layout/components/header'

const PorfolioPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Body of work | Portfolio</title>
        <meta name='description' content="From by desk is my blog. I talk about art, tech, and my opinions as well as share tutorials and videos." />
      </Helmet>
      <Header />
      <WaveHero>
        <WaveHeroTitle title1='Body' title2='of' title3='work' />
      </WaveHero>
      <CMSContextProvider limit={20} contentType={process.env.CONTENTFUL_PORTFOLIO_ID}>
        <PortfolioFeed className='portfolio-page-portfolio-feed' linkEnabled={false} enableTitle={false} />
      </CMSContextProvider>
    </>
  )
}

export default PorfolioPage