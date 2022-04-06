import React from 'react'
import { NormalizedBlogData } from '../../../../../../../context/cms/hooks/types'
import AppLink from '../../../../../../app-link'
import LazyImage from '../../../../../../lazy-image'
import Section from '../../../../../../section'
import './styles.scss'

const CarouselSlide: React.FC<NormalizedBlogData> = ( 
  {
    title,
    featuredImage,
    description, 
    slug,
    hardRoute 
  }
) => {
  return (
    <div
      className='carousel-slide'
    >
      <div
        className='carousel-slide-image'
      >
        <LazyImage
          imgSrc={featuredImage?.url || ''}
          alt={featuredImage?.description || featuredImage?.title}
        />
      </div>
      <Section
        className='section-wider'
      >
        <div
          className='carousel-slide-content'
        >
          <h2>
            {title}
          </h2>
          <p>
            {description}
          </p>
          <div
            className='carousel-link'
          >
            <AppLink
              inverted
              hard={hardRoute}
              target={hardRoute ? '_blank' : undefined}
              to={slug || ''}
            >
          See&nbsp;
              {title}
            </AppLink>
          </div>
        </div>
      </Section>
    </div> 
  )
}
export default CarouselSlide