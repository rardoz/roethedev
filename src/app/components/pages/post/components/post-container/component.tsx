import React, { useContext } from 'react'
import Section from '../../../../section'
import ContentfulToReact from '../../../../contentful-to-react'
import cMSContext from '../../../../../context/cms'
import { ContentType } from '../../../../../context/cms/hooks/types'
import { useParams } from 'react-router-dom'
import SectionTitle from '../../../../section-title'
import { DiscussionEmbed } from 'disqus-react'
import WaveHeroWithImage from '../../../../wave-hero-with-image'
import MediaController from '../../../../media-controller'
import './styles.scss'
import HelmetHead from '../../../../helmet-head'
import dayjs from 'dayjs'

const PostContainer: React.FC<{ contentType: ContentType }> = ( { contentType } ) => {
  const postRecord = useContext( cMSContext )
  const { slug } = useParams()
  const record = postRecord.items ? postRecord.items.find( ( item ) => item.slug === slug ) || {
  } : {
  }

  const innerNodes = record.content ? (
    <Section
      className='post-content-section'
    >
      <HelmetHead
        title={`${record.title} | ${contentType.charAt( 0 ).toUpperCase() + contentType.slice( 1 )}` || 'Roe the Dev'}
        description={record.description}
        ogType='article'
        keywords={record.keywords}
        image={record.socialPhoto?.url || record.featuredImage?.url}
      />
      <article>
        {
          <ContentfulToReact
            content={record.content}
          />
        }
        {
          contentType === 'blog' && (
            <div
              className='article-footer'
            >
              <p>
Written by Roe Greene
              </p>
              <p>
Last updated on&nbsp;
                {dayjs( record.dateUpdated ).format( 'MMMM DD, YYYY @ hh:mm A' )}
              </p>
            </div>
          )
        }
      </article>
      <SectionTitle />
      {
        record.slug && <DiscussionEmbed
          shortname={`${process.env.DISQUS_SHORTNAME}`}
          config={
            {
              url: `${process.env.DISQUS_APP_URL}${window.location.pathname}`,
              identifier: `${contentType}-${record.slug}`,
              title: record.title,
              language: 'us_EN'
            }
          }
        />
      }
    </Section>
  ) : postRecord.items ? (
    <Section>
      <SectionTitle>
Post not found
      </SectionTitle>
      <p
        className='text-center'
      >
Sorry the page you are looking for no longer exists.
      </p>
      <HelmetHead
        title='Post not found'
        follow={false}
      />
    </Section>
  ) : (
    <>
...
    </>
  )

  return (
    <>
      <WaveHeroWithImage
        src={record.blogPhoto?.url}
        title={record.title}
        description={record.description}
      >
        {
          record.video?.url && (
            <MediaController>
              <div
                className='video-container'
              >
                <video
                  autoPlay
                  width={record.video?.width}
                  height={record.video?.height}
                  controls
                  src={record.video?.url}
                >
                Your browser does not support the video tag.
                </video>
              </div>
            </MediaController>
          )
        }
      </WaveHeroWithImage>
      {innerNodes}
    </>
  )
}

export default PostContainer
