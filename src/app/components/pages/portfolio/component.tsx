import React from 'react'
import { CMSContextProvider } from '../../../context/cms'
import PortfolioFeed from '../home/components/portfolio-feed'
import Header from '../../layout/components/header'
import HelmetHead from '../../helmet-head'
import Section from '../../section'
import SectionTitle from '../../section-title'

const PorfolioPage: React.FC = () => {
  return (
    <>
      <HelmetHead
        title='Body of work | Portfolio'
        keywords='portfolio, work, web, development, engineering, frontend'
        description={
          `This is the best and most recent collection of my work.`
        }
      />
      <Header
        forceInView
      />
      <Section
        className='section-wider'
      >
        <SectionTitle>
        Body of work
        </SectionTitle>
        <CMSContextProvider
          limit={20}
          contentType={process.env.CONTENTFUL_PORTFOLIO_ID}
        >
          <PortfolioFeed
            linkEnabled={false}
            enableTitle={false}
          />
        </CMSContextProvider>
      </Section>
    </>
  )
}

export default PorfolioPage
