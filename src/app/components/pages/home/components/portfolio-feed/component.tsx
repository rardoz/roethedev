import React, { useContext } from 'react'
import AppLink from '../../../../app-link'
import Section from '../../../../section'
import SectionTitle from '../../../../section-title'
import Card from '../../../../card'
import './styles.scss'
import cmsContext from '../../../../../context/cms'
import classNames from 'classnames'
const PortfolioFeed: React.FC<{
  className?: string
  enableTitle?: boolean
  linkEnabled?: boolean
}> = ( { enableTitle = true, linkEnabled = true, className } ) => {
  const { items } = useContext( cmsContext )
  return (
    <>
      <Section
        className={
          classNames( 'section-wider',
            'portfolio-feed',
            className )
        }
      >
        {
          enableTitle && <SectionTitle>
Portfolio
          </SectionTitle>
        }
        <div
          className='flex-grid'
        >
          {
            items?.map( ( article ) => {
              return (
                <Card
                  className='flex-grid-item'
                  key={article.slug}
                  description={article.description || ''}
                  title={article.title || ''}
                  to={`/portfolio/${article.slug}`}
                  featuredImage={article.featuredImage?.url || ''}
                />
              )
            } )
          }
        </div>
        {
          linkEnabled && (
            <p
              className='text-right'
            >
              <AppLink
                to='/portfolio'
                className='app-link-lg'
              >
              See portfolio
              </AppLink>
            </p>
          )
        }
      </Section>
    </>
  )
}

export default PortfolioFeed
