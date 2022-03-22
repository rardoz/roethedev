import { BLOCKS, MARKS, INLINES, Document, Block, Inline } from '@contentful/rich-text-types'
import { documentToReactComponents, } from '@contentful/rich-text-react-renderer'
import React from 'react'
import './styles.scss'

const options = {
  renderMark: {
    [ MARKS.BOLD ]: ( text:React.ReactNode ) => <strong>{text}</strong>,
  },
  renderNode: {
    [ INLINES.HYPERLINK ]: ( node: Block | Inline, children: React.ReactNode ) => <a href={node.data.uri} target="_blank">{children}</a>,
    [ BLOCKS.PARAGRAPH ]: ( node: Block | Inline, children: React.ReactNode ) => <p>{children}</p>,
  },
  renderText: ( text: string ) => {
    try {
      return text.split( '\n' )
        .flatMap( ( sentence, i ) => [
          i > 0 && <br />,
          sentence.startsWith( "<iframe " )
            ? <div dangerouslySetInnerHTML={{ __html: sentence }} /> :  sentence ] )
    } catch( e ) {
      console.info( e )
      return text
    }
  }
}

const ContentfulToReact: React.FC<{content: Document}> = ( { content } ) => (
  <div className='contentful-to-react'>{documentToReactComponents( content, options )}</div>
)

export default ContentfulToReact