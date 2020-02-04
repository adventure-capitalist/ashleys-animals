import React from "react"

export default () => (
  <section id="contact">
    <div className="inner">
      <section>
        <form
          name="Contact"
          action="/thanks/"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="fields">
            <div className="field half">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="6"></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Enquire" className="primary" />
            </li>
            <li>
              <input type="reset" value="Nevermind" />
            </li>
          </ul>
        </form>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon solid alt fa-envelope"></span>
            <h3>Email</h3>
            <a href="#">hello@ashleysanimaladoption.co.uk</a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon solid alt fa-phone"></span>
            <h3>Phone</h3>
            <span>(989) 123-4567 x12387</span>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon solid alt fa-home"></span>
            <h3>Address</h3>
            <span>
              1234 Yellow Brick Road
              <br />
              Springfield, Surrey 00000
              <br />
              United Kingdom
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
)
