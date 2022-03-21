import React from "react"
import WaveContainer from "../../../wave-container"
import './styles.scss'

const Footer: React.FC = () => {
  return (
    <div className="app-footer">
      <WaveContainer type="bottom">
        <footer className="d-flex">
          <nav className="d-flex flex-center">
            <div className="d-flex flex-end flex-center">
            &copy; 2022.&nbsp;<a href="https://byrojo.com" target="_blank">Find more at byrojo.com</a>.
            </div>
          </nav>
        </footer>
      </WaveContainer>
    </div>
  )
}

export default Footer