import React, { Suspense } from 'react'
import { render } from 'react-dom'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HelmetHead from './components/helmet-head'
import Layout from './components/layout'
import Header from './components/layout/components/header'

const HomePage = React.lazy( () => import( './components/pages/home' ) )
const AboutPage = React.lazy( () => import( './components/pages/about' ) )
const BlogPage = React.lazy( () => import( './components/pages/blog' ) )
const PostPage = React.lazy( () => import( './components/pages/post' ) )
const NotFoundPage = React.lazy( () => import( './components/pages/not-found' ) )
const PortfolioPage = React.lazy( () => import( './components/pages/portfolio' ) )

const Application: React.FC = () => {
  return (
    <HelmetProvider>
      <HelmetHead />
      <BrowserRouter>
        <Layout>
          <Suspense
            fallback={<Header />}
          >
            <Routes>
              <Route
                index
                element={<HomePage />}
              />
              <Route
                path='/about'
                element={<AboutPage />}
              />
              <Route
                path='/blog'
                element={<BlogPage />}
              />
              <Route
                path='/portfolio'
                element={<PortfolioPage />}
              />
              <Route
                path='/blog/:slug'
                element={
                  <PostPage
                    contentType='blog'
                  />
                }
              />
              <Route
                path='/portfolio/:slug'
                element={
                  <PostPage
                    contentType='portfolio'
                  />
                }
              />
              <Route
                path='*'
                element={<NotFoundPage />}
              />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  )
}

render( <Application />,
  document.getElementById( 'root' ) )

if ( module.hot ) {
  module.hot.accept()
}
