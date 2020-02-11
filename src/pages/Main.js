import React from "react"
import Services from "./Services"
import Two from "./Two"

const Main = props => (
  <div id="main">
    <Services a={props.article} />
    <Two contactheader={props.contactheader} contactbody={props.contactbody} />
  </div>
)

export default Main
