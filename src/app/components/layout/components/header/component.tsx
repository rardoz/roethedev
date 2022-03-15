import React from "react"
import { Link } from "react-router-dom"

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <Link to="/" aria-label="Logo">
          <h1>
            Roe <small>the</small> Dev
          </h1>
        </Link>
      </nav>
    </header>
  )
}

export default Header
