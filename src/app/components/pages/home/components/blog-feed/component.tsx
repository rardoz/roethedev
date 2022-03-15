import React from "react"
import { Link } from "react-router-dom"

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
    <section>
      <h2>From my desk</h2>
      <hr />
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
                  <title>{title}</title>
                  <p>{description}</p>
                </Link>
                <Link to={to}>Read</Link>
              </div>
            )
          }
        )}
      </div>
      <Link to="/blog">See blog</Link>
    </section>
  )
}

export default BlogFeed
