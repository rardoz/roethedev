import {  useState, useMemo, useEffect } from "react"
import * as contentful from 'contentful'
import type { BlogField, NormalizedBlogData, USE_BLOG_ARGS, NormalizedBlogState } from './types'

let contentfulClient: contentful.ContentfulClientApi

const getClient = (): contentful.ContentfulClientApi => {
  contentfulClient = contentfulClient || contentful.createClient( {
    // A space is like a project folder in Contentful terms
    space: `${process.env.CONTENTFUL_SPACE_ID}`,
    //Normally you get both ID and the token in the Contentful web app
    accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    //ENABLE PREVIEW API  host: "preview.contentful.com"
    host: process.env.CONTENTFUL_HOST,
  } )
  return contentfulClient
}

const normalizeData = ( items: contentful.Entry< BlogField >[]  ):NormalizedBlogData[] => {
  const normalizedFields: NormalizedBlogData[] = []
  items.forEach( ( { fields: fieldRow, sys: { createdAt, updatedAt } } ) => {
    // todo make this not hurt my heart to look at
    normalizedFields.push( {
      blogPhoto: {
        url: fieldRow.blogPhoto?.fields?.file.url,
        contentType: fieldRow.blogPhoto?.fields?.file.contentType,
        title: fieldRow.blogPhoto?.fields?.title,
        description: fieldRow.blogPhoto?.fields?.description,
        width: fieldRow.blogPhoto?.fields?.file.details.image?.width,
        height: fieldRow.blogPhoto?.fields?.file.details.image?.height,
        fileName: fieldRow.blogPhoto?.fields?.file.fileName,
      },
      socialPhoto: {
        url: fieldRow.socialPhoto?.fields?.file.url,
        contentType: fieldRow.socialPhoto?.fields?.file.contentType,
        title: fieldRow.socialPhoto?.fields?.title,
        description: fieldRow.socialPhoto?.fields?.description,
        width: fieldRow.socialPhoto?.fields?.file.details.image?.width,
        height: fieldRow.socialPhoto?.fields?.file.details.image?.height,
        fileName: fieldRow.socialPhoto?.fields?.file.fileName,
      },
      featuredImage: {
        url: fieldRow.featuredImage?.fields?.file.url,
        contentType: fieldRow.featuredImage?.fields?.file.contentType,
        title: fieldRow.featuredImage?.fields?.title,
        description: fieldRow.featuredImage?.fields?.description,
        width: fieldRow.featuredImage?.fields?.file.details.image?.width,
        height: fieldRow.featuredImage?.fields?.file.details.image?.height,
        fileName: fieldRow.featuredImage?.fields?.file.fileName,
      },
      video: {
        url: fieldRow.video?.fields?.file.url,
        contentType: fieldRow.video?.fields?.file.contentType,
        title: fieldRow.video?.fields?.title,
        description: fieldRow.video?.fields?.description,
        width: fieldRow.video?.fields?.file.details.image?.width,
        height: fieldRow.video?.fields?.file.details.image?.height,
        fileName: fieldRow.video?.fields?.file.fileName,
      },
      content: fieldRow.content,
      keywords: fieldRow.keywords,
      description: fieldRow.description,
      title: fieldRow.title,
      dateCreated: createdAt,
      dateUpdated: updatedAt,
      slug: fieldRow.slug
    } )
  } )
  return normalizedFields
}

export const useEntries = ( limit = 10, skip = 0, contentType?: 'blog'| string, order?: string ): NormalizedBlogState => {
  const [ 
    blogs,
    setBlogs 
  ] = useState( {} as  NormalizedBlogState )

  useMemo( () => {
    console.warn( 'getting em!' )
    getClient()
      .getEntries( {
        content_type: contentType || process.env.CONTENTFUL_BLOG_ID,
        limit,
        skip,
        order: order || '-sys.createdAt'
      } )
      .then( entry => {
        setBlogs( {
          items: normalizeData( entry.items as contentful.Entry<BlogField>[] )
        } )
        console.warn( 'done' )
      } )
      .catch( err => console.error( err ) )
  }, [ limit, skip, contentType, order ] )
  return blogs
}