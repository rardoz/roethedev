import React from 'react'
import { Link } from 'react-router-dom'

const Layout: React.FC = ( { children } ) => {
    return (
        <>
            <header>
                <nav>
                    <Link to="/">Roe the Dev</Link>
                </nav>
            </header>
            {children}
            <footer>
                <nav>
                    <Link to="/about">About Roe</Link>
                </nav>
            </footer>
        </>
    )
}

export default Layout