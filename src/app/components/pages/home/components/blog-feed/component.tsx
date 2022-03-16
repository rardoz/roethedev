/* eslint-disable max-len */
import React from "react"
import { Link } from "react-router-dom"
import Section from "../../../../section"
import SectionTitle from "../../../../section-title"

const fakeArticles = [
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
    <Section>
      <SectionTitle>From my desk</SectionTitle>
      <div>
        {fakeArticles.map(
          ( { title, description, to, featuredImage }, index ) => {
            return (
              <div key={index}>
                <Link to={to}>
                  <div
                    aria-label="featured image"
                    style={{ backgroundImage: `url(${featuredImage})` }}
                  />
                  <h4>{title}</h4>
                  <p>{description}</p>
                </Link>
                <Link to={to}>Read</Link>
              </div>
            )
          }
        )}
      </div>
      <Link to="/blog">See blog</Link>
    </Section>
  )
}

export default BlogFeed
