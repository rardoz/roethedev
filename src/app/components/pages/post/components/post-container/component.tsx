import React, {  useContext, useEffect } from 'react'
import Section from '../../../../section'
import ContentfulToReact from '../../../../contentful-to-react'
import cMSContext from '../../../../../context/cms'
import { Helmet } from 'react-helmet-async'
import { useParams
} from "react-router-dom"
import SectionTitle from '../../../../section-title'

const PostContainer: React.FC = ()=> {
  const postRecord = useContext( cMSContext )
  const { slug } = useParams()
  const record = postRecord.items ? postRecord.items.find( item => item.slug === slug ) || {} : {}
  
  console.log( record )

  return record.content ? (
    <Section>
      <Helmet>
        <title>{record.title || "Roe the Dev"}</title>
        <meta name="description"
          content={record.description || ""}/>
      </Helmet>
      <article>
        <SectionTitle>
          {record.title}
        </SectionTitle>
        {<ContentfulToReact content={record.content} />}
      </article>
    </Section>
  ) :( postRecord.items ? <Section>
    <SectionTitle>Post not found</SectionTitle>
    <p className='text-center'>Sorry the page you are looking for no longer exists.</p>
    <Helmet>
      <title>Post not found</title>
      <meta name="robots" content="noindex" />
    </Helmet>
  </Section> : <>...</> )
}

export default PostContainer