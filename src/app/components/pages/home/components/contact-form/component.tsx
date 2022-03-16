import React from "react"
import SectionTitle from "../../../../section-title"
import Section from "../../../../section"
import './styles.scss'
import RadioFieldset from "./components/radio-fieldset"
import SERVICES_OPTIONS from "./constants"
import Textarea from "./components/textarea/component"
import TextInput from "./components/text-input"
import WaveContainer from "../../../../wave-container"

const ContactForm: React.FC = () => {
  return (
    <WaveContainer className="contact-form">
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
            <div className="col-4">
              <TextInput title="Enter your name" name="name" id="name-field" type="name" required />
            </div>
            <div className="col-spacer" />
            <div className="col-4">
              <TextInput title="Enter your email" name="email" id="email-field" type="email" required />
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
