import React, {  useContext } from 'react'
import Section from '../../../../section'
import ContentfulToReact from '../../../../contentful-to-react'
import cMSContext from '../../../../../context/cms'
import { ContentType } from '../../../../../context/cms/hooks/types'
import { Helmet } from 'react-helmet-async'
import { useParams
} from "react-router-dom"
import SectionTitle from '../../../../section-title'
import { DiscussionEmbed } from 'disqus-react'
import WaveHeroWithImage from '../../../../wave-hero-with-image'

const PostContainer: React.FC<{contentType: ContentType}> = ( { contentType } )=> {
  const postRecord = useContext( cMSContext )
  const { slug } = useParams()
  const record = postRecord.items ? postRecord.items.find( item => item.slug === slug ) || {} : {}

  const innerNodes = record.content ? (
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

        <DiscussionEmbed
          shortname={`${process.env.DISQUS_SHORTNAME}`}
          config={
            {
              url: `${process.env.DISQUS_APP_URL}${window.location.pathname}`,
              identifier: `${contentType}-${record.slug}`,
              title:record.title,
              language: 'us_EN'
            }
          }
        />
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

  return <>
    <WaveHeroWithImage src={record.blogPhoto?.url}  />
    {innerNodes}
  </>
}

export default PostContainer