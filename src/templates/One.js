import React from "react"

const One = props => {
  var articles = props.a
  return (
    <section id="one" class="tiles">
      {articles.map((article, i) => {
        return (
          <article>
            <span className="image">
              <img src={article.photo} alt="" />
            </span>
            <header className="major">
              <h3>
                <a href="" className="link">
                  {article.headline}
                </a>
              </h3>
              <p>{article.content}</p>
            </header>
          </article>
        )
      })}
    </section>
  )
}
export default One
