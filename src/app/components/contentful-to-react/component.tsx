import { BLOCKS, MARKS, INLINES, Document, Block, Inline } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import React from 'react'
import './styles.scss'
import LazyImage from '../lazy-image'

const options = {
  renderMark: {
    [ MARKS.BOLD ]: ( text: React.ReactNode ) => <strong>{text}</strong>,
  },
  renderNode: {
    [ BLOCKS.EMBEDDED_ASSET ]: ( node: Block ) => {
      const fields = node.data?.target?.fields || {}
      return (
        <div className='contentful-to-react-image-container'>
          <LazyImage imgSrc={fields.file?.url} alt={fields.title} />
          <p>
            <em>{fields.description}</em>
          </p>
        </div>
      )
    },
    [ INLINES.HYPERLINK ]: ( node: Block | Inline, children: React.ReactNode ) => (
      <a href={node.data.uri} target='_blank' rel="noreferrer">
        {children}
      </a>
    ),
    [ BLOCKS.PARAGRAPH ]: ( node: Block | Inline, children: React.ReactNode ) => <p>{children}</p>,
  },
  renderText: ( text: string ) => {
    try {
      return text
        .split( '\n' )
        .flatMap( ( sentence, i ) => [
          i > 0 && <br />,
          sentence.startsWith( '<iframe ' ) ? <div dangerouslySetInnerHTML={{ __html: sentence }} /> : sentence,
        ] )
    } catch ( e ) {
      console.info( e )
      return text
    }
  },
}

const ContentfulToReact: React.FC<{ content: Document }> = ( { content } ) => (
  <div className='contentful-to-react'>{documentToReactComponents( content,
    options )}</div>
)

export default ContentfulToReact
