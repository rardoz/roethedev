import React from "react"
import { Link } from "react-router-dom"
import WaveBorder from "../../../wave-border"
import './styles.scss'

const Header: React.FC = () => {
  return (
    <header className="app-nav">
      <nav>
        <Link to="/" aria-label="Logo">
          <h1 className="app-logo">
            • Roe <small>the</small> Dev •
          </h1>
        </Link>
      </nav>
      <div>
        <WaveBorder />
      </div>
    </header>
  )
}

export default Header
