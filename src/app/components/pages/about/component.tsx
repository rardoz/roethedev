import React from 'react'
import Header from '../../layout/components/header'
import Section from '../../section'
import BigAvatar from '../home/components/about-section/components/big-avatar'
import ContentBlock from '../home/components/about-section/components/content-block'
import avatarImg from '../home/components/about-section/assets/roe-greene.png'
import avatarImgAlt from '../home/components/about-section/assets/roe-greene-alt.png'
import HelmetHead from '../../helmet-head'
import SectionTitle from '../../section-title'

const AboutPage: React.FC = () => {
  return (
    <>
      <Header
        forceInView
      />
      <HelmetHead
        title='About Roe'
        description={`Download Roe's resume and learn a little more about his career.`}
      />
      
      <Section>
        <SectionTitle>
       About Roe
        </SectionTitle>
        <div
          className='flex-grid space-between'
        >
          <BigAvatar
            avatarImg={avatarImg}
            avatarImgAlt={avatarImgAlt}
          />
          <ContentBlock
            className='col-5'
          />
        </div>
        <br />
        <br />
        <div
          className='d-flex flex-center app-link-container'
        >
          <a
            className='app-link'
            href='https://roe-files.s3.amazonaws.com/Roe-Greene-Resume.pdf'
            download
          >
            <h2>
Download my resume
            </h2>
          </a>
        </div>
      </Section>
      <br />
    </>
  )
}

export default AboutPage
