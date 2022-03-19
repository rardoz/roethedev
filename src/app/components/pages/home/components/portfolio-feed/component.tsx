import React, { useContext } from "react"
import AppLink from "../../../../app-link"
import Section from "../../../../section"
import SectionTitle from "../../../../section-title"
import Card from "../../../../card"
import './styles.scss'
import cmsContext from '../../../../../context/cms'

const PortfolioFeed: React.FC = () => {
  const { items } = useContext( cmsContext )
  return (
    <>
      <Section className="section-wider portfolio-feed">
        <SectionTitle>Portfolio</SectionTitle>
        <div className="flex-grid">
          {items?.map(
            ( article ) => {
              return (
                <Card
                  className="flex-grid-item"
                  key={article.slug} 
                  description={article.description || ''}
                  title={article.title || ''}
                  to={`/portfolio/${article.slug}`}
                  featuredImage={article.featuredImage?.url || ''}
                />
              )
            }
          )}
        </div>
        <p className="text-right">
          <AppLink to="/portfolio" className="app-link-lg">See portfolio</AppLink>
        </p>
      </Section>
    </>
  )
}

export default PortfolioFeed
