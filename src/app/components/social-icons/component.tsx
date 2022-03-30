import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faTwitch } from '@fortawesome/free-brands-svg-icons/faTwitch'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faFile } from '@fortawesome/free-solid-svg-icons/faFile'
import './styles.scss'
import classnames from 'classnames'

const SOCIAL_ICONS = [
  {
    icon: faGithub,
    ariaLabel: "Link to Github",
    title: "Github",
    href: "https://github.com/rardoz"
  },
  {
    icon: faTwitch,
    ariaLabel: "Link to Twitch",
    title: "Twitch",
    href: "https://twitch.tv/roe_the_dev"
  },
  {
    icon: faTwitterSquare,
    ariaLabel: "Link to Twitter",
    title: "Twitter",
    href: "https://twitter.com/roe_the_dev"
  },
  {
    icon: faLinkedin,
    ariaLabel: "Link to LinkedIn",
    title: "Linkedin",
    href: "https://linkedin.com/in/rardoz"
  },
  {
    icon: faEnvelope,
    ariaLabel: "Link to email",
    title: "Email",
    href: "mailto:robert@byrojo.com?subject=Hello Roe!"
  },
  {
    icon: faFile,
    ariaLabel: "Download resume",
    title: "Resume",
    href: "https://roe-files.s3.amazonaws.com/Roe-Greene-Resume.pdf",
    download: true
  },
]

const SocialIcons: React.FC<{inverted?: boolean, className?: string}> = ( { inverted, className } ) => {
  const itemClassName = classnames( 'social-icon-item', { inverted } )
  return (
    <>
      {SOCIAL_ICONS.map( ( { icon, ariaLabel, title, href, download } )=> {
        return ( 
          <li  className={classnames( itemClassName, className )} key={title}>
            <a
              title={title}
              href={href}
              aria-label={ariaLabel}
              target="_blank"
              download={download}>
              <FontAwesomeIcon icon={icon} />
            </a>
          </li> 
        )
      } )}
     
    </>
  )
}

export default SocialIcons