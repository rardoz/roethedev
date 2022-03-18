import React, {  } from "react"
import SectionTitle from "../../../../section-title"
import Section from "../../../../section"
import './styles.scss'
import WaveContainer from "../../../../wave-container"
import avatarImg from './assets/roe-greene.png'
import avatarImgAlt from './assets/roe-greene-alt.png'
import BigAvatar from "./components/big-avatar"
import ContentBlock from "./components/content-block"
import AppLink from "../../../../app-link"

const AboutSection: React.FC = () => {
  
  return (
    <WaveContainer className="about-section">
      <Section>
        <SectionTitle>
          About Roe
        </SectionTitle>
        <div className="flex-grid space-between">
          <BigAvatar avatarImg={avatarImg} avatarImgAlt={avatarImgAlt} />
          <ContentBlock className="col-5" >
            <div className="d-flex flex-end app-link-container">
              <AppLink to="/about" inverted>Learn more</AppLink>
            </div>
          </ContentBlock>
        </div>
      </Section>
    </WaveContainer>
  )
}

export default AboutSection
