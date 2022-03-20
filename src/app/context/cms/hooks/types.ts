import { Asset } from 'contentful'
import {  Document } from '@contentful/rich-text-types'

export type contentType  =  'blog' | 'portfolio' | string

export interface USE_BLOG_ARGS {
    limit?: number
    skip?: number
    contentType?: contentType
    slug?: string
}

export interface BlogField {
    blogPhoto: Asset,
    content: Document
    description: string
    featuredImage: Asset
    keywords: string
    socialPhoto: Asset
    title: string
    video: Asset
    slug: string
}

export interface NormalizedBlogPhoto {
    url?: string
    description?: string
    contentType?: string
    fileName?: string
    width?: number
    height?: number
    title?: string
}
// todo convert this to NormalizedContentfulAsset
export type NormalizedBlogVideo = NormalizedBlogPhoto

export interface NormalizedBlogData {
    blogPhoto?: NormalizedBlogPhoto
    content?: Document
    description?: string
    featuredImage?: NormalizedBlogPhoto
    keywords?: string
    socialPhoto?: NormalizedBlogPhoto
    title?: string
    video?: NormalizedBlogVideo
    dateCreated?: string
    dateUpdated?: string
    slug?: string
}

export interface NormalizedBlogState {
    items?: NormalizedBlogData[]
}