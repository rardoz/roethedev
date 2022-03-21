import React from 'react'
import AppLink from '../../app-link'
import Header from '../../layout/components/header'
import Section from '../../section'
import SectionTitle from '../../section-title'
import BigAvatar from '../home/components/about-section/components/big-avatar'
import ContentBlock from '../home/components/about-section/components/content-block'
import avatarImg from '../home/components/about-section/assets/roe-greene.png'
import avatarImgAlt from '../home/components/about-section/assets/roe-greene-alt.png'
import WaveContainer from '../../wave-container'
const AboutPage: React.FC = () => {
  return (
    <>
      <Header /> 
      <WaveContainer>
        <h1 className='text-center'>About Roe</h1>
      </WaveContainer>
      <br />
      <br /> 
      <Section>
        <div className="flex-grid space-between">
          <BigAvatar avatarImg={avatarImg} avatarImgAlt={avatarImgAlt} />
          <ContentBlock className="col-5"  />
        </div>
        <br/>
        <br/>
        <div className="d-flex flex-center app-link-container">
          <a className='app-link' href="https://roe-files.s3.amazonaws.com/Roe-Greene-Resume.pdf" download><h2>Download my resume</h2></a>
        </div>
      </Section>
  
      <br />
    </>
  )
}

export default AboutPage