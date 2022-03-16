import React from "react"
import AppLink from "../../../../app-link"
import Section from "../../../../section"
import SectionTitle from "../../../../section-title"
import Card from "./components/card"
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
  {
    title: "Test 1",
    description: "This is a test description of doom!",
    to: "/",
    featuredImage:
      "https://cdn.dribbble.com/users/125948/screenshots/11261672/media/ea2fda61c1647eadca0f7d2607505673.jpg?compress=1&resize=400x300",
  },
]

const BlogFeed: React.FC = () => {
  return (
    <>
      <Section className="section-wider blog-feed">
        <SectionTitle>From my desk</SectionTitle>
        <div className="flex-grid">
          {fakeArticles.map(
            ( article, index ) => {
              return (
                <Card className="flex-grid-item" key={index} {...article} />
              )
            }
          )}
        </div>
        <p>
          <AppLink to="/blog" className="app-link-lg">See blog</AppLink>
        </p>
      </Section>
    </>
  )
}

export default BlogFeed
