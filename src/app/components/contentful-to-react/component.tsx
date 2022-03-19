import { BLOCKS, MARKS, Document, Block, Inline } from '@contentful/rich-text-types'
import { documentToReactComponents, } from '@contentful/rich-text-react-renderer'
import React from 'react'

const options = {
  renderMark: {
    [ MARKS.BOLD ]: ( text:React.ReactNode ) => <strong>{text}</strong>,
  },
  renderNode: {
    [ BLOCKS.PARAGRAPH ]: ( node: Block | Inline, children: React.ReactNode ) => <p>{children}</p>,
  },
  renderText: ( text:string ) => text.replace( '!', '?' ),
}

const ContentfulToReact: React.FC<{content: Document}> = ( { content } ) => (
  <>{documentToReactComponents( content, options )}</>
)

export default ContentfulToReact