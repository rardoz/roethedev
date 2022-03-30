import React, { MutableRefObject, useEffect, useRef } from "react"
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
  const form = useRef() as MutableRefObject<HTMLFormElement>
  const { 
    onSubmit,
    data,
    message,
    loading } = useSubmitContactForm()

  useEffect( () => {
    if( data?.success ) {
      form.current.reset()
    }
  }, [ data?.success ] )
  return (
    <WaveContainer className="contact-form">
      <Section className="contact-form-section">
        <SectionTitle>
          <span className="flex-center row text-break-space">
            <span>I'm here</span><span> to help </span>
          </span>
        </SectionTitle>
        {/* Contact form is a route to a lambda */}
        <form ref={form} aria-disabled={loading ? "true" : "false"} action="/contact-form" method="POST" onSubmit={( e ) => {
          onSubmit( new FormData( e.currentTarget ) )
          e.preventDefault()
        }}>
          <div className="row contact-form-first-row">
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
              <TextInput title="Email" name="email" id="email-field" type="email" required  />
            </div>
          </div>
          <div className="row" >
            <TextInput
              disabled={
                loading || ( data?.success as boolean )
              }
              value={(
                loading 
                  ? "Sending" 
                  : data?.success
                    ? "The message was sent" 
                    : "Send to Roe" 
              )}
              title="Send message" 
              id="submit-field" 
              type="submit" 
              required 
            />
          </div>
          <p
            className="form-message"
            style={{ visibility: message ? 'visible' : 'hidden' }}>
            {message}
          </p>
        </form>
      </Section>
    </WaveContainer>
  )
}

export default ContactForm
