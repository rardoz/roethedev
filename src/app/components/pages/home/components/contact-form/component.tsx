import React from "react"
import SectionTitle from "../../../../section-title"
import Section from "../../../../section"
import './styles.scss'
import RadioFieldset from "./components/radio-fieldset"
import SERVICES_OPTIONS from "./constants"
import Textarea from "./components/textarea/component"
import TextInput from "./components/text-input"
import WaveContainer from "../../../../wave-container"
import { useSubmitContactForm } from "./hooks"

const ContactForm: React.FC = () => {
  const [ onSubmit ] = useSubmitContactForm()

  return (
    <WaveContainer className="contact-form">
      <Section className="contact-form-section">
        <SectionTitle>
        Let me help &amp; teach you
        </SectionTitle>
        {/* Contact form is a route to a lambda */}
        <form action="/contact-form" method="POST" onSubmit={( e ) => {
          onSubmit( new FormData( e.currentTarget ) )
          e.preventDefault()
        }}>
          <div className="row">
            <div className="col-3">
              <RadioFieldset options={SERVICES_OPTIONS} title="Select services" />
            </div>
            <div className="col-7">
              <Textarea />
            </div>
          </div>
          <div className="row contact-form-name-row">
            <div className="col-4">
              <TextInput title="Name" name="name" id="name-field" type="name" required />
            </div>
            <div className="col-spacer" />
            <div className="col-4">
              <TextInput title="Email" name="email" id="email-field" type="email"  />
            </div>
          </div>
          <div className="row" >
            <TextInput value="Send to Roe" title="Send message" id="submit-field" type="submit" required />
          </div>
        </form>
      </Section>
    </WaveContainer>
  )
}

export default ContactForm
