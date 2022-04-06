import React from 'react'
import { CMSContextProvider } from '../../../context/cms'
import BlogFeed from '../home/components/blog-feed'
import Header from '../../layout/components/header'
import HelmetHead from '../../helmet-head'
import SectionTitle from '../../section-title'
import Section from '../../section'

const BlogPage: React.FC = () => {
  return (
    <>
      <HelmetHead
        title='From my desk | Blog'
        description={
          `From by desk is my nerdy blog.
          I talk about art, tech, and my
          opinions as well as share tutorials
          and videos.`
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
          contentType={process.env.CONTENTFUL_BLOG_ID}
        >
          <BlogFeed
            linkEnabled={false}
            enableTitle={false}
          />
        </CMSContextProvider>

      </Section>
    </>
  )
}

export default BlogPage
