import React from "react"
import './styles.scss'

const Footer: React.FC = () => {
  return (
    <footer className="app-footer">
      <nav>
        <div>
            &copy; 2022. <a href="https://byrojo.com" target="_blank">Find more at byrojo.com</a>.
        </div>
      </nav>
    </footer>
  )
}

export default Footer