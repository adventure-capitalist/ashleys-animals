import React from "react"
import One from "./One"
import Two from "./Two"

const Main = props => (
  <div id="main">
    <One article={props.article} />
    <Two contactheader={props.contactheader} contactbody={props.contactbody} />
  </div>
)

export default Main
