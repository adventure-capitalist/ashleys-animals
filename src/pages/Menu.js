import React from "react"
import Nav from "./Nav"
import { Link } from "gatsby"
import logo from "../../static/assets/logo.jpg"

export default () => (
  <div>
    <header id="header" className="alt">
      <Link to="/" className="logo">
        <img id="logo" src={logo} alt="logo" />
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
