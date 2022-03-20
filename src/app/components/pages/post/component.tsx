import React from 'react'
import { CMSContextProvider } from '../../../context/cms'
import WaveHero from '../../wave-hero'
import { Helmet } from "react-helmet-async"
import { useParams
} from "react-router-dom"
import PostContainer from './components/post-container'

const PostPage: React.FC = ( props ) => {
  const { slug } = useParams()
  console.log( props )
  return (
    <>
      <Helmet>
        <title>TODO</title>
        <meta name='description' content="TODO" />
      </Helmet>
      <WaveHero>
        todo
      </WaveHero>
      {slug && 
        <CMSContextProvider slug={slug}>
          <PostContainer contentType='blog'/>
        </CMSContextProvider>
      }
    </>
  )
}

export default PostPage