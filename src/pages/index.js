import React from "react"
import Banner from "./Banner"
import Contact from "./Contact"
import Footer from "./Footer"
import Main from "./Main"
import { Link } from "gatsby"
import { graphql } from "gatsby"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Index = props => {
  // const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <main className="is-preload">
      <div id="wrapper">
        {/* Menu */}
        <header id="header" className="alt">
          <Link to="/" className="logo">
            {/* <h1>{data.title}</h1> */}
            <strong>Ashley's</strong> <span>Animal Adoption</span>
          </Link>
          <nav>
            <a href="/Menu">Menu</a>
          </nav>
        </header>

        {/* Banner */}
        <Banner />

        {/* Main */}
        <Main />
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

// export const query = graphql`
//   query {
//     allFile(
//       filter: { sourceInstanceName: { eq: "content" }, name: { eq: "home" } }
//     ) {
//       edges {
//         node {
//           childMarkdownRemark {
//             frontmatter {
//               title
//             }
//           }
//         }
//       }
//     }
//   }
//`
