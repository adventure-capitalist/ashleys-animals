import React from "react"

const Two = props => (
  <div id="CTA">
    <section id="two">
      <div className="inner description">
        <header className="major">
          <h2>{props.contactheader}</h2>
        </header>
        <p>{props.contactbody}</p>
      </div>
    </section>
  </div>
)
export default Two
