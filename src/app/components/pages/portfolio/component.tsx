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
          `
          From by desk is my blog.
          I talk about art, tech,
          and my opinions as well as 
          share tutorials and videos.
        `
        }
      />
      <Header
        forceInView
      />
      <Section
        className='section-wider'
      >
        <SectionTitle>
        From my desk
        </SectionTitle>
        <CMSContextProvider
          limit={20}
          contentType={process.env.CONTENTFUL_PORTFOLIO_ID}
        >
          <PortfolioFeed
            className='portfolio-page-portfolio-feed'
            linkEnabled={false}
            enableTitle={false}
          />
        </CMSContextProvider>
      </Section>
    </>
  )
}

export default PorfolioPage
