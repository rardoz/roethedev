import React from "react"
import { Link } from "react-router-dom"

const Footer: React.FC = () => {
  return (
    <footer>
      <nav>
        <Link to="about">About Roe</Link>
      </nav>
    </footer>
  )
}

export default Footer