import React from "react"
import AppLink from "../../../../app-link"
import Section from "../../../../section"
import SectionTitle from "../../../../section-title"
import Card from "../../../../card"
import './styles.scss'

const fakeArticles = [
  { 
    title: "Test 1 Test 1 Test 1 Test 1 Test 1",
    description: "This is a test description of doom! This is a test description of doom! This is a test description of doom!",
    to: "/",
    featuredImage:
      "https://cdn.dribbble.com/users/125948/screenshots/11261672/media/ea2fda61c1647eadca0f7d2607505673.jpg?compress=1&resize=400x300",
  },
  {
    title: "Test 1",
    description: "This is a test description of doom!",
    to: "/",
    featuredImage:
      "https://cdn.dribbble.com/users/125948/screenshots/11261672/media/ea2fda61c1647eadca0f7d2607505673.jpg?compress=1&resize=400x300",
  },
  {
    title: "Test 1",
    description: "This is a test description of doom!",
    to: "/",
    featuredImage:
      "https://cdn.dribbble.com/users/125948/screenshots/11261672/media/ea2fda61c1647eadca0f7d2607505673.jpg?compress=1&resize=400x300",
  },
]
// same as blog-feed - merge if we end up using this

const PortfolioFeed: React.FC = () => {
  return (
    <>
      <Section className="section-wider portfolio-feed">
        <SectionTitle>Portfolio</SectionTitle>
        <div className="flex-grid">
          {fakeArticles.map(
            ( article, index ) => {
              return (
                <Card className="flex-grid-item" key={index} {...article} />
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
