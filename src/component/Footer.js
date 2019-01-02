import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="foo">
          <nav className="navbar navbar-light navbar-expand-lg bg-dark ">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav co">
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">
                    <span style={{ color: "white", fontWeight: "bold" }}>
                      Shards Agency
                    </span>
                  </a>
                </li>
                <li className="nav-item active ">
                  <a className="nav-link" href="#">
                    <span style={{ color: "white" }}>Home</span>{" "}
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span style={{ color: "white" }}>Our Services</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span style={{ color: "white" }}>Blog</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">
                    <span style={{ color: "white" }}>Testimonials</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">
                    <span style={{ color: "white" }}>contact us</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default Footer;
