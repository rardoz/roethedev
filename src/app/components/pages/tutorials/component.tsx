import React from 'react'
import { CMSContextProvider } from '../../../context/cms'
import WaveHero from '../../wave-hero'
import WaveHeroTitle from '../../wave-hero/components/wave-hero-title'
import BlogFeed from '../home/components/blog-feed'
import Header from '../../layout/components/header'
import HelmetHead from '../../helmet-head'
import SectionTitle from '../../section-title'
import Section from '../../section'

const TutorialsPage: React.FC = () => {
  return (
    <>
      <HelmetHead
        title='Best React JS Tutorials | Tutorials'
        description={
          `Hand picked tutorials for Javascript,
          NodeJS, ReactJS, NextJS, SCSS/CSS, and
          more.`
        }
        follow={false}
      />
      <Header
        forceInView
      />
      <Section>
        <SectionTitle>
        Tutorials
        </SectionTitle>
      coming soon...
      </Section>
      <CMSContextProvider
        limit={20}
        contentType="tutorials"
      >
        <BlogFeed
          linkEnabled={false}
          enableTitle={false}
        />
      </CMSContextProvider>
    </>
  )
}

export default TutorialsPage
