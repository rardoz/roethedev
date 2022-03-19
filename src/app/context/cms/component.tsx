import React, { createContext } from 'react'
import { useEntries } from './hooks'
import type {  NormalizedBlogState, USE_BLOG_ARGS } from './hooks/types'

const DEFAULT_STATE: NormalizedBlogState = {}

const context = createContext( DEFAULT_STATE )

const { Provider } = context

export const CMSContextProvider: React.FC<USE_BLOG_ARGS> = ( { children,
  contentType,
  limit = 10,
  skip = 0
} ) => {
  //todo need a pagination hook
  return <Provider value={useEntries( limit, skip, contentType )}>{children}</Provider>
}

export default context