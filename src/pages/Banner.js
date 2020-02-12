import React from "react"

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>{props.header}</h1>
      </header>
      <div className="content">
        <p>{props.subtitle}</p>
        <ul className="actions">
          <li>
            <a href="#two" className="button next scrolly">
              Achieve your aims
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)
export default Banner
