import React from 'react'
import AboutSection from './components/about-section'
import BlogFeed from './components/blog-feed'
import ContactForm from './components/contact-form'
import PortfolioFeed from './components/portfolio-feed'

const HomePage: React.FC = () => {
  return (
    <div>
      <ContactForm />
      <PortfolioFeed />
      <AboutSection />
      <BlogFeed />
    </div>
  )
}

export default HomePage