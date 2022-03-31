/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const env = require( 'dotenv' )
const { SitemapStream, streamToPromise, SitemapIndexStream } = require( 'sitemap' )
const { Readable } = require( 'stream' )
const contentful = require( 'contentful' )
const fs = require( 'fs' )
const { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID, HOST_NAME } = env.config().parsed
const BLACKLIST = [ '*', '/404' ]

const contentfulClient = contentful.createClient( {
  accessToken: CONTENTFUL_ACCESS_TOKEN,
  space: CONTENTFUL_SPACE_ID,
} )

const options = {
  hostname: HOST_NAME || 'https://roethedev.com',
}

const createSitemap = async ( { urls, category, changefreq, priority, lastmod } ) => {
  let links = []
  if ( category === 'page' || category === 'sitemap' ) {
    links = urls.map( ( url ) => {
      return {
        url,
        category,
        changefreq,
        priority,
        lastmod,
      }
    } )
  } else {
    const response = await contentfulClient.getEntries( {
      content_type: category,
      order: '-sys.createdAt',
      limit: 50,
    } )

    links = response.items.map( ( item ) => {
      return {
        url: `/${category}/${item.fields.slug}`,
        changefreq: 'weekly',
        lastmod: item.sys.updatedAt || lastmod,
        priority: 0.5,
      }
    } )
  }

  const stream = category === 'sitemap' ? await new SitemapIndexStream( options ) : await new SitemapStream( options )
  return await streamToPromise( Readable.from( links ).pipe( stream ) )
    .then( ( data ) => {
      fs.writeFileSync( `./dist/sitemaps/${category}.xml`,
        data.toString(),
        {
          encoding: 'utf-8',
        } )
    } )
    .catch( ( e ) => {
      console.error( e )
    } )
}

fs.readFile( './src/app/index.tsx',
  'utf8',
  ( err, data ) => {
    if ( err ) {
      console.error( err )
      return
    }
    const pageUrls = {
      category: 'page',
      changefreq: 'daily',
      priority: 1,
      urls: [ '/' ],
    }

    const blogUrls = {
      category: 'blog',
      changefreq: 'monthly',
      priority: 0.3,
      urls: [],
    }

    const portfolioUrls = {
      category: 'portfolio',
      changefreq: 'weekly',
      priority: 0.5,
      urls: [],
    }

    const mainSitemapUrls = {
      category: 'sitemap',
      changefreq: 'weekly',
      priority: 1,
      lastmod: new Date().toDateString(),
      urls: [
        `${options.hostname}/sitemaps/page.xml`,
        `${options.hostname}/sitemaps/portfolio.xml`,
        `${options.hostname}/sitemaps/blog.xml`,
      ],
    }

    data.match( /path=".*"/g ).forEach( ( path ) => {
      const url = path.replace( /path=|"/g,
        '' )
      if ( url.includes( ':' ) ) {
      //get the sub pages
      } else if ( !BLACKLIST.includes( url ) ) {
      //page type
        pageUrls.urls.push( url )
      }
    } )

    createSitemap( pageUrls )
    createSitemap( portfolioUrls )
    createSitemap( blogUrls )
    createSitemap( mainSitemapUrls )
  } )
