import React from "react"
import WaveContainer from "../../../wave-container"
import './styles.scss'
import Section from '../../../section'

const Footer: React.FC = () => {
  return (
    <WaveContainer type="bottom">
      <footer className="app-footer d-flex">
        <nav className="d-flex">
          <Section className="section-wider d-flex">
            <div className="d-flex flex-end align-self-center">
            &copy; 2022.&nbsp;<a href="https://byrojo.com" target="_blank">Find more at byrojo.com</a>.
            </div>
          </Section>
        </nav>
      </footer>
    </WaveContainer>
  )
}

export default Footer