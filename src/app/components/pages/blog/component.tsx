import React from 'react'
import { CMSContextProvider } from '../../../context/cms'
import WaveHero from '../../wave-hero'
import WaveHeroTitle from '../../wave-hero/components/wave-hero-title'
import BlogFeed from '../home/components/blog-feed'
import { Helmet } from "react-helmet-async"
import './styles.scss'
import Header from '../../layout/components/header'

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>From my desk | Blog</title>
        <meta name='description' content="From by desk is my blog. I talk about art, tech, and my opinions as well as share tutorials and videos." />
      </Helmet>
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