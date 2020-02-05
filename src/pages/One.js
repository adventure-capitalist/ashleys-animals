import React from "react"
import rat from "./styles/images/pic02.jpeg"
import hamster from "./styles/images/pic01.jpg"
import turtle from "./styles/images/pic03.jpg"
import guineaPig from "./styles/images/pic04.jpg"

const One = props => (
  <section id="one" className="tiles">
    <article>
      <span className="image">
        <img src={props.article[0].photo} alt="" />
      </span>
      <header className="major">
        <h3>
          <a href="" className="link">
            {props.article[0].headline}
          </a>
        </h3>
        <p>{props.article[0].content}</p>
      </header>
    </article>
    <article>
      <span className="image">
        <img src={props.article[1].photo} alt="" />
      </span>
      <header className="major">
        <h3>
          <a href="" className="link">
            {props.article[1].headline}
          </a>
        </h3>
        <p>{props.article[1].content}</p>
      </header>
    </article>
    <article>
      <span className="image">
        <img src={props.article[2].photo} alt="" />
      </span>
      <header className="major">
        <h3>
          <a href="" className="link">
            {props.article[2].headline}
          </a>
        </h3>
        <p>{props.article[2].content}</p>
      </header>
    </article>
    <article>
      <span className="image">
        <img src={props.article[3].photo} alt="" />
      </span>
      <header className="major">
        <h3>
          <a href="" className="link">
            {props.article[3].headline}
          </a>
        </h3>
        <p>{props.article[3].content}</p>
      </header>
    </article>
  </section>
)
export default One
