import React from "react"

const ContactForm: React.FC = () => {
  return (
    <section>
      <h2>Let me help or teach you</h2>
      <hr />
      <form action="some-lamda-in-aws" method="POST">
        <div>
          <fieldset name="services[]">
            <legend>Select services</legend>
            {[
              { name: "project-consulting", label: "Project consulting" },
              { name: "project-development", label: "Project development" },
              { name: "react-tutoring", label: "React tutoring" },
              { name: "javascript-tutoring", label: "Javascript tutoring" },
              { name: "nodejs-tutoring", label: "NodeJS tutoring" },
              { name: "css-tutoring", label: "CSS tutoring" },
              { name: "architecture", label: "Architecture" },
              { name: "other", label: "Other" },
            ].map( ( { name, label } ) => (
              <div key={name}>
                <input
                  type="radio"
                  name={`services[${name}]`}
                  id={`services-${name}`}
                />
                <label htmlFor={`services-${name}`}>{label}</label>
              </div>
            ) )}
          </fieldset>
          <div>
            <label htmlFor="message-textarea">Message to Roe</label>
            <textarea
              id="message-textarea"
              placeholder="Include any important details."
              required
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="name-field">Your name</label>
            <input type="name" id="name-field" />
          </div>

          <div>
            <label htmlFor="email-field">Your email</label>
            <input type="email" id="email-field" />
          </div>
        </div>
        <div>
          <input type="submit" value="Send to Roe" />
        </div>
      </form>
    </section>
  )
}

export default ContactForm
