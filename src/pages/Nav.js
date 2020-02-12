import React from "react"

import { Link } from "gatsby"

export default () => (
  <div className="nav">
    <ul className="links">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/#one">About</Link>
      </li>
      <li>
        <Link to="/#two">Adoption</Link>
      </li>
      <li>
        <Link to="/#contact">Contact</Link>
      </li>
    </ul>
    <ul className="actions stacked">
      <li>
        <Link to="/#two" className="button primary fit">
          Start
        </Link>
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
  </div>
)
