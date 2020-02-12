import React from "react"
import Banner from "./Banner"
import Contact from "./Contact"
import Footer from "./Footer"
import { Link } from "gatsby"
import { graphql } from "gatsby"

const Index = props => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <main className="is-preload">
      <div id="wrapper">
        {/* Menu */}
        <header id="header" className="alt">
          <Link to="/" className="logo">
            <strong>aiMS</strong> <span>acheived</span>
          </Link>
          <nav>
            <a href="/Menu">Menu</a>
          </nav>
        </header>

        {/* Banner */}
        <Banner
          test={data}
          header={data.content[0].bannerheader}
          subtitle={data.content[0].subtitle}
        />

        {/* Main */}

        <div id="main">
          <section id="one" class="tiles">
            {data.article.map((article, i) => {
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
          <div id="CTA">
            <section id="two">
              <div className="inner description">
                <header className="major">
                  <h2>{data.content[0].contactheader}</h2>
                </header>
                <p>{data.content[0].contactbody}</p>
              </div>
            </section>
          </div>
        </div>

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <Footer />

        {/* Scripts */}
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/jquery.scrolly.min.js"></script>
        <script src="assets/js/jquery.scrollex.min.js"></script>
        <script src="assets/js/browser.min.js"></script>
        <script src="assets/js/breakpoints.min.js"></script>
        <script src="assets/js/util.js"></script>
        <script src="assets/js/main.js"></script>
      </div>
    </main>
  )
}
export default Index

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "content" }
        name: { eq: "homepage" }
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              content {
                bannerheader
                subtitle
                contactheader
                contactbody
              }
              article {
                headline
                content
                photo
              }
            }
          }
        }
      }
    }
  }
`
