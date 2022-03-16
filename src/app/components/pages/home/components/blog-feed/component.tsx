import React from "react"
import { Link } from "react-router-dom"
import Section from "../../../../section"
import SectionTitle from "../../../../section-title"
import Card from "./components/card"

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
      <Section>
        <SectionTitle>From my desk</SectionTitle>
      </Section>
      <Section className="section-wider">
        <div className="flex-grid">
          {fakeArticles.map(
            ( article, index ) => {
              return (
                <Card className="flex-grid-item" key={index} {...article} />
              )
            }
          )}
        </div>
        <Link to="/blog">See blog</Link>
      </Section>
    </>
  )
}

export default BlogFeed
