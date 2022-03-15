import React, { Suspense } from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Layout from './components/layout'

const HomePage = React.lazy( () => import( './components/pages/home' ) )
const AboutPage = React.lazy( () => import( './components/pages/about' ) )

const Application: React.FC = () => (
  <BrowserRouter>
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />}/>
        </Routes>
      </Suspense>
    </Layout>
  </BrowserRouter>
)

render( <Application />, document.getElementById( 'root' ) )

if ( module.hot ) {
  module.hot.accept()
}