import React from 'react'
import BlogFeed from './components/blog-feed'
import ContactForm from './components/contact-form'

const HomePage: React.FC = () => {
    return (
        <div>
            <ContactForm />
            <BlogFeed />
        </div>
    )
}

export default HomePage