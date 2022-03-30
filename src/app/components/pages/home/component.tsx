import React from 'react'
import AboutSection from './components/about-section'
import BlogFeed from './components/blog-feed'
import ContactForm from './components/contact-form'
import PortfolioFeed from './components/portfolio-feed'
import { CMSContextProvider } from '../../../context/cms'
import Header from '../../layout/components/header'
import BlubSection from './components/blurb-section'
import WaveHero from '../../wave-hero'
import PreSignupForm from './components/pre-signup-form'

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <div>
        <WaveHero>
          <PreSignupForm />
        </WaveHero>
        <BlubSection />
        <ContactForm />
        <CMSContextProvider limit={3} contentType={process.env.CONTENTFUL_PORTFOLIO_ID}>
          <PortfolioFeed />
        </CMSContextProvider>
        <AboutSection />
        <CMSContextProvider contentType='linkBank' limit={3}>
          <BlogFeed />
        </CMSContextProvider>
      </div>
    </>
  )
}

export default HomePage