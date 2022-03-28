import React from 'react'
import { Helmet, HelmetProps } from 'react-helmet-async'
import { HelmetHeadProps } from './types'
 
const HelmetHead: React.FC<HelmetProps & HelmetHeadProps> = ( {
  title = "Roe the Dev",
  description = "Javascript Web and Native Mobile Engineer available for consulting, projects, and tutoring.",
  image = "https://roe-files.s3.amazonaws.com/default-social-image.jpg",
  keywords = "developer, designer, engineer, frontend, tutoring, javascript, react, web",
  ogType = 'website',
  follow = true,
  children,
} ) => {
  return ( 
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description"
        content={description}/>}
      <meta name="robots" content={follow ? "index,follow" : "noindex" }/>
      {title && <meta property="og:title" content={title}/>}
      {description && <meta property='og:description' content={description} />}
      {keywords && <meta name="keywords" content={keywords}/>}
      {ogType && <meta property="og:type" content={ogType}/>}
      {image && <meta property="og:image" name="image" content={image }/>}
      {description && <meta property='twitter:description' content={description} />}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description}/>}
      {image && <meta name="twitter:image" content={ image} />}
      <meta name="twitter:card" content="summary" />
      <meta name="author" content="Roe Greene" />
      <meta name="copyright" content="Copyright 2022" />
      {children}
    </Helmet> 
  )
}

export default HelmetHead