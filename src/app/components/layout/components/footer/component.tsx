import React from "react"
import WaveContainer from "../../../wave-container"
import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'

const Footer: React.FC = () => {
  return (
    <div className="app-footer">
      <WaveContainer type="bottom">
        <footer className="d-flex">
          <nav>
            <div className="app-footer-github-section">
              <div className="d-flex flex-center">
                <a href="https://github.com/rardoz/roethedev" className="app-flip-on-hover" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
              <p className="d-flex flex-center">
                <a href="https://github.com/rardoz/roethedev" target="_blank">Code available on Github</a>.
              </p>
              <br />
            </div>
            <div className="d-flex flex-center">
              <div className="d-flex flex-end flex-center">
                &copy; 2022.&nbsp;<a href="https://byrojo.com" target="_blank"><small>Find more at byrojo.com</small></a>.
              </div>
            </div>
          </nav>
        </footer>
      </WaveContainer>
    </div>
  )
}

export default Footer