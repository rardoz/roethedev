import React from 'react'
import { CMSContextProvider } from '../../../context/cms'
import { Helmet } from "react-helmet-async"
import { useParams
} from "react-router-dom"
import PostContainer from './components/post-container'
import { ContentType } from '../../../context/cms/hooks/types'

const PostPage: React.FC<{contentType: ContentType}> = ( props ) => {
  const { slug } = useParams()
  return (
    <>
      <Helmet>
        <title>TODO</title>
        <meta name='description' content="TODO" />
      </Helmet>
 
      {slug && 
        <CMSContextProvider contentType={props.contentType} slug={slug}>
          <PostContainer contentType='blog'/>
        </CMSContextProvider>
      }
    </>
  )
}

export default PostPage