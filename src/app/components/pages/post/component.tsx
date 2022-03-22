import React from 'react'
import { CMSContextProvider } from '../../../context/cms'
import { useParams
} from "react-router-dom"
import PostContainer from './components/post-container'
import { ContentType } from '../../../context/cms/hooks/types'
import Header from '../../layout/components/header'

const PostPage: React.FC<{contentType: ContentType}> = ( props ) => {
  const { slug } = useParams()
  return (
    <>
      <Header forceInView /> 
      {slug && 
        <CMSContextProvider contentType={props.contentType} slug={slug}>
          <PostContainer contentType={props.contentType}/>
        </CMSContextProvider>
      }
    </>
  )
}

export default PostPage