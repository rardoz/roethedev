import React, { createContext } from 'react'
import { useEntries } from './hooks'
import type { NormalizedBlogState, USE_BLOG_ARGS } from './hooks/types'

const DEFAULT_STATE: NormalizedBlogState = {}

const context = createContext( DEFAULT_STATE )

const { Provider } = context

export const CMSContextProvider: React.FC<USE_BLOG_ARGS> = ( {
  children, 
  contentType, slug, 
  limit = 10,
  skip = 0 } ) => {
  return <Provider value={useEntries( { limit, skip, contentType, slug } )}>{children}</Provider>
}

export default context
