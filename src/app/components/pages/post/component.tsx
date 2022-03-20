import React from 'react'
import { CMSContextProvider } from '../../../context/cms'
import WaveHero from '../../wave-hero'
import { Helmet } from "react-helmet-async"
import { useParams
} from "react-router-dom"
import PostContainer from './components/post-container'

const PostPage: React.FC = () => {
  const { slug } = useParams()
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
          <PostContainer />
        </CMSContextProvider>
      }
    </>
  )
}

export default PostPage