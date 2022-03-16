import React from "react"
import SectionTitle from "../../../../section-title"
import Section from "../../../../section"
import './styles.scss'
import RadioFieldset from "./components/radio-fieldset"
import SERVICES_OPTIONS from "./constants"
import Textarea from "./components/textarea/component"

const ContactForm: React.FC = () => {
  return (
    <Section className="contact-form-section">
      <SectionTitle>
        Let me help &amp; teach you
      </SectionTitle>

      <form action="some-lamda-in-aws" method="POST">
        <div className="row">
          <div className="col-3">
            <RadioFieldset options={SERVICES_OPTIONS} title="Select services" />
          </div>
          <div className="col-7">
            <Textarea />
          </div>
        </div>
        <div className="row">
          <div>
            <label htmlFor="name-field">Your name</label>
            <input type="name" id="name-field" />
          </div>

          <div>
            <label htmlFor="email-field">Your email</label>
            <input type="email" id="email-field" />
          </div>
        </div>
        <div className="row">
          <input type="submit" value="Send to Roe" />
        </div>
      </form>
    </Section>
  )
}

export default ContactForm
