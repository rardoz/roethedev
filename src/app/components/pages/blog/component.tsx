import React from 'react'
import { CMSContextProvider } from '../../../context/cms'
import WaveHero from '../../wave-hero'
import WaveHeroTitle from '../../wave-hero/components/wave-hero-title'
import BlogFeed from '../home/components/blog-feed'
import './styles.scss'
import Header from '../../layout/components/header'
import HelmetHead from '../../helmet-head'

const BlogPage: React.FC = () => {
  return (
    <>
      <HelmetHead
        title='From my desk | Blog'
        description="From by desk is my nerdy blog. I talk about art, tech, and my opinions as well as share tutorials and videos."
      />
      <Header />
      <WaveHero>
        <WaveHeroTitle title1='From' title2='my' title3='desk' />
      </WaveHero>
      <CMSContextProvider limit={20} contentType={process.env.CONTENTFUL_BLOG_ID}>
        <BlogFeed className='blog-page-blog-feed' linkEnabled={false} enableTitle={false} />
      </CMSContextProvider>
    </>
  )
}

export default BlogPage