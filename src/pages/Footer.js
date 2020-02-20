import React from "react"
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa"

export default () => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        {/* <li>
          <a
            href="https://twitter.com/"
            target="_blank"
            className="icon brands alt fa-twitter"
          >
            <span className="label">Twitter</span>
          </a>
        </li> */}
        <li>
          <a
            href="https://www.facebook.com/AIMS-Achieved-LTD-113476420211591/"
            target="_blank"
          >
            <FaFacebookSquare></FaFacebookSquare>
          </a>
        </li>
        {/* <li>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="icon brands alt fa-instagram"
          >
            <span className="label">Instagram</span>
          </a>
        </li> */}
        <li>
          <a
            href="https://www.linkedin.com/in/mark-sewell-13bb22/"
            target="_blank"
            className="icon brands alt fa-linkedin-in"
          >
            <FaLinkedin></FaLinkedin>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; aiMS achieved</li>
        <li>
          Design:
          <a href="https://planetwidecity.com" target="_blank">
            Planet Wide City
          </a>
        </li>
      </ul>
    </div>
  </footer>
)
