import React from "react"

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section>
        <form
          name="Contact"
          action="/Thanks"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <div className="fields">
            <div className="field half">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="6"
                required
              ></textarea>
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
            <a href="#">mark@aims-acheived.com</a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon solid alt fa-phone"></span>
            <h3>Phone</h3>
            <span>+44 (0) 7786 126931</span>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon solid alt fa-home"></span>
            <h3>Address</h3>
            <span>
              Wey Court West
              <br />
              Union Road
              <br />
              Farnham, Surrey GU97PT
              <br />
              United Kingdom
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
)

export default Contact
