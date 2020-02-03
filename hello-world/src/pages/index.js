import React from "react"
import "../styles/global.css"

export default () => (
  <div>
    <main className="is-preload">
      {/* Wrapper */}
      <div id="wrapper">
        {/* Header*/}
        <header id="header" className="alt">
          <a href="index.html" className="logo">
            <strong>Ashley's</strong> <span>Animal Adoption</span>
          </a>
          <nav>
            <a href="#menu">Menu</a>
          </nav>
        </header>

        {/* Menu */}
        <nav id="menu">
          <ul className="links">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#one">About</a>
            </li>
            <li>
              <a href="#two">Adoption</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <ul className="actions stacked">
            <li>
              <a href="#two" className="button primary fit">
                Get started adopting
              </a>
            </li>
            <li>
              <a
                href="https://paypal.me/ashleylaurel"
                target="_blank"
                className="button fit"
              >
                Donate
              </a>
            </li>
          </ul>
        </nav>

        {/*  Banner */}
        <section id="banner" className="major">
          <div className="inner">
            <header className="major">
              <h1>Welcome to Ashley's Animal Adoption</h1>
            </header>
            <div className="content">
              <p>
                We strive to help rehome smaller animals
                <br />
                that might be turned away by traditional animal shelters.
              </p>
              <ul className="actions">
                <li>
                  <a href="#two" className="button next scrolly">
                    Start adopting
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/*  Main  */}
        <div id="main">
          {/* One */}
          <section id="one" className="tiles">
            <article>
              <span className="image">
                <img src="images/pic01.jpg" alt="" />
              </span>
              <header className="major">
                <h3>
                  <a href="landing.html" className="link">
                    About
                  </a>
                </h3>
                <p>
                  In the words of Walt Disney: "it all started with a mouse."
                  Ashley started helping small animals in need in 2013 and since
                  then, every year she has helped around 50 small animals find
                  their forever homes.
                </p>
              </header>
            </article>
            <article>
              <span className="image">
                <img src="images/pic04.jpg" alt="" />
              </span>
              <header className="major">
                <h3>
                  <a href="ourAnimals.html" className="link">
                    Our Animals
                  </a>
                </h3>
                <p>
                  We regularly take in all kinds of small animals. We specialise
                  in small mammels such as mice, rats, hamsters and guinea pigs,
                  however we have also helped plenty of reptiles over the years.
                </p>
              </header>
            </article>
            <article>
              <span className="image">
                <img src="images/pic03.jpg" alt="" />
              </span>
              <header className="major">
                <h3>
                  <a href="landing.html" className="link">
                    Adoption Process
                  </a>
                </h3>
                <p>
                  We aim to keep the adoption process as straight forward and
                  simple as possible. Our adoptive families will just need to
                  prove that they can provide high quality care to our animals,
                  and that they are knowledgable about the individual needs of
                  each species. We will help to educate wherever possible.
                </p>
              </header>
            </article>
            <article>
              <span className="image">
                <img src="images/pic02.jpeg" alt="" />
              </span>
              <header className="major">
                <h3>
                  <a href="landing.html" className="link">
                    Donate
                  </a>
                </h3>
                <p>
                  Ashley's Animal Adoption is a registered charity in the UK. We
                  welcome donations of any size or shape as they help us to
                  continue to resue small animals in need of our help.
                </p>
              </header>
            </article>
          </section>

          {/* Two */}
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Interested in Adopting?</h2>
              </header>
              <p>
                That's great! Please tell us a bit about yourself using the form
                below and we will be get back to you with the next steps. Feel
                free to ask any questions you might have at this stage. We'll be
                happy to answer each and every one.
              </p>
            </div>
          </section>
        </div>

        {/* Contact */}
        <section id="contact">
          <div className="inner">
            <section>
              <form method="post" action="#">
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

        {/* Footer */}
        <footer id="footer">
          <div className="inner">
            <ul className="icons">
              <li>
                <a
                  href="https://twitter.com/AshleysAnimalA1"
                  target="_blank"
                  className="icon brands alt fa-twitter"
                >
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/AshleysAnimalRescue/"
                  target="_blank"
                  className="icon brands alt fa-facebook-f"
                >
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ashleyrainbowpets/?hl=en"
                  target="_blank"
                  className="icon brands alt fa-instagram"
                >
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/ashleys-animal-haven/about/"
                  target="_blank"
                  className="icon brands alt fa-linkedin-in"
                >
                  <span className="label">LinkedIn</span>
                </a>
              </li>
            </ul>
            <ul className="copyright">
              <li>&copy; Ashley's Animal Adoption</li>
              <li>
                Design:
                <a href="https://planetwidecity.com" target="_blank">
                  Planet Wide City
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </main>
  </div>
)
