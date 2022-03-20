import React, { Suspense } from 'react'
import { render } from 'react-dom'
import { HelmetProvider, Helmet } from "react-helmet-async"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Layout from './components/layout'

const HomePage = React.lazy( () => import( './components/pages/home' ) )
const AboutPage = React.lazy( () => import( './components/pages/about' ) )
const BlogPage = React.lazy( () => import( './components/pages/blog' ) )

const PortfolioPage = React.lazy( () => import( './components/pages/portfolio' ) )

const Application: React.FC = () => (
  <HelmetProvider>
    <Helmet>
      <title>Roe the Dev</title>
      <meta name="description"
        content="Javascript Web and Native Mobile Engineer available for consulting, projects, and tutoring." />
    </Helmet>
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div>...</div>}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />}/>
            <Route path="/blog" element={<BlogPage />}/>
            <Route path="/portfolio" element={<PortfolioPage />}/>
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  </HelmetProvider>
)

render( <Application />, document.getElementById( 'root' ) )

if ( module.hot ) {
  module.hot.accept()
}