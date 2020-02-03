import React from "react"
import rat from "./styles/images/pic02.jpeg"
import hamster from "./styles/images/pic01.jpg"
import turtle from "./styles/images/pic03.jpg"
import guineaPig from "./styles/images/pic04.jpg"

export default () => (
  <section id="one" className="tiles">
    <article>
      <span className="image">
        <img src={hamster} alt="" />
      </span>
      <header className="major">
        <h3>
          <a href="" className="link">
            About
          </a>
        </h3>
        <p>
          In the words of Walt Disney: "it all started with a mouse." Ashley
          started helping small animals in need in 2013 and since then, every
          year she has helped around 50 small animals find their forever homes.
        </p>
      </header>
    </article>
    <article>
      <span className="image">
        <img src={guineaPig} alt="" />
      </span>
      <header className="major">
        <h3>
          <a href="" className="link">
            Our Animals
          </a>
        </h3>
        <p>
          We regularly take in all kinds of small animals. We specialise in
          small mammels such as mice, rats, hamsters and guinea pigs, however we
          have also helped plenty of reptiles over the years.
        </p>
      </header>
    </article>
    <article>
      <span className="image">
        <img src={turtle} alt="" />
      </span>
      <header className="major">
        <h3>
          <a href="" className="link">
            Adoption Process
          </a>
        </h3>
        <p>
          We aim to keep the adoption process as straight forward and simple as
          possible. Our adoptive families will just need to prove that they can
          provide high quality care to our animals, and that they are
          knowledgable about the individual needs of each species. We will help
          to educate wherever possible.
        </p>
      </header>
    </article>
    <article>
      <span className="image">
        <img src={rat} alt="" />
      </span>
      <header className="major">
        <h3>
          <a href="" className="link">
            Donate
          </a>
        </h3>
        <p>
          Ashley's Animal Adoption is a registered charity in the UK. We welcome
          donations of any size or shape as they help us to continue to resue
          small animals in need of our help.
        </p>
      </header>
    </article>
  </section>
)
