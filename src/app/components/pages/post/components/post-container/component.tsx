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
import MediaController from '../../../../media-controller'
import './styles.scss'

const PostContainer: React.FC<{contentType: ContentType}> = ( { contentType } )=> {
  const postRecord = useContext( cMSContext )
  const { slug } = useParams()
  const record = postRecord.items ? postRecord.items.find( item => item.slug === slug ) || {} : {}

  const innerNodes = record.content ? (
    <Section className='post-content-section'>
      <Helmet>
        <title>{`${record.title} | ${contentType.charAt( 0 ).toUpperCase() + contentType.slice( 1 )}` || "Roe the Dev"}</title>
        <meta name="description"
          content={record.description || ""}/>
        <meta property="og:title" content={record.title}/>
        <meta property='og:description' content={record.description} />
        <meta property="og:type" content="article" />
        <meta property='twitter:description' content={record.description} />
        <meta name="twitter:title" content={record.title} />
        <meta name="twitter:description" content={record.description}/>
        <meta name="twitter:image" content={ record.socialPhoto?.url || record.featuredImage?.url} />
        <meta name="twitter:card" content={record.socialPhoto?.url || record.featuredImage?.url } />
        <meta property="og:image" content={record.socialPhoto?.url || record.featuredImage?.url }/>
      </Helmet>
      <article>
        {<ContentfulToReact content={record.content} />}
      </article>
      <SectionTitle />
      <DiscussionEmbed
        shortname={`${process.env.DISQUS_SHORTNAME}`}
        config={
          {
            url: `${process.env.DISQUS_APP_URL}${window.location.pathname}`,
            identifier: `${contentType}-${record.slug}`,
            title:record.title,
            language: 'us_EN',
            categoryID: contentType
          }
        }
      />
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
    <WaveHeroWithImage
      src={record.blogPhoto?.url}
      title={record.title}
      description={record.description}
    >
      {record.video?.url && <MediaController>
        <div className='video-container'>
          { <video autoPlay width={record.video?.width} height={record.video?.height} controls src={record.video?.url}>
        Your browser does not support the video tag.
          </video>}
        </div>
      </MediaController>}
    </WaveHeroWithImage>
    {innerNodes}
  </>
}

export default PostContainer