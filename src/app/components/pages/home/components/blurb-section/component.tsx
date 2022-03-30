import React from 'react'
import SectionTitle from '../../../../section-title'
import Section from '../../../../section'
import './styles.scss'

const BlubSection: React.FC = () => {
  return (
    <Section className='blurb-section'>
      <SectionTitle>
        {`Front End Development`}
      </SectionTitle>
      <p>
        {`
                I believe the key to success is rooted 
                in learning and constant mentorship. 
                Javascript can be fun and easy, or it can be really hard.
                The sucky part about Javascript is that it's all up to you.
                It's also the best part because it leaves room for innovation.
          `}        
      </p>
      <p>
        {`
                I started writing CSS, HTML and JavaScript
                sometime around 2003. Since then these languages
                have mutated and evolved, and they aren't done either.
          `}
      </p>
      <p>
        {`     
                If you want to learn how to write Javascript and keep up with the fontend world –
                fill out my contact form. You can also chat with me live using the chat widget on
                the lower part of your screen.
          `}
      </p>
    </Section>
  )
}

export default BlubSection