import React from "react"

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
