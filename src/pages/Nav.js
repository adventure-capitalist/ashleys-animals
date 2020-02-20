import React from "react"

import { Link } from "gatsby"

export default () => (
  <div className="nav">
    <ul className="links">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/#one">Services</Link>
      </li>
      <li>
        <Link to="/#two">About</Link>
      </li>
    </ul>
    <ul className="actions stacked">
      <li>
        <Link to="/#contact" className="button primary fit">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)
