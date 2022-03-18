import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faNpm } from '@fortawesome/free-brands-svg-icons/faNpm'
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
    icon: faNpm,
    ariaLabel: "Link to npm",
    title: "npm",
    href: "https://www.npmjs.com/~rardoz"
  },
  {
    icon: faEnvelope,
    ariaLabel: "Link to email",
    title: "Email",
    href: "mailto:robert@byrojo.com?subject=Hello Roe!"
  },
  {
    icon: faLinkedin,
    ariaLabel: "Link to LinkedIn",
    title: "Linkedin",
    href: "https://linkedin.com/in/rardoz"
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