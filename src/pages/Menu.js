import React from "react"
import Nav from "./Nav"
import { Link } from "gatsby"

export default () => (
  <div>
    <header id="header" className="alt">
      <Link to="/" className="logo">
        <strong>Ashley's</strong> <span>Animal Adoption</span>
      </Link>
      <nav>
        <a href="/Menu">Menu</a>
      </nav>
    </header>
    {/* Menu */}
    <main>
      <Nav></Nav>
    </main>
  </div>
)
