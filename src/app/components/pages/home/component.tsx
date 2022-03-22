import React from 'react'
import AboutSection from './components/about-section'
import BlogFeed from './components/blog-feed'
import ContactForm from './components/contact-form'
import PortfolioFeed from './components/portfolio-feed'
import { CMSContextProvider } from '../../../context/cms'
import Header from '../../layout/components/header'

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <div>
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