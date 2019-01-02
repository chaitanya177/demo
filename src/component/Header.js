import React, { Component } from 'react';

class Header extends Component{
  render(){
    return (
      <div>
        <div className="root container-fluid">
          <div className="pot">
            <nav className="navbar navbar-light navbar-expand-lg bg-transparent">
              <a className="navbar-brand" href="#">
                <img
                  src="./images/shards-logo-green.svg"
                  width={30}
                  height={30}
                  className="d-inline-block align-top"
                  alt
                />
                <span style={{ color: "white" }}> Shards App</span>
              </a>
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
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Our Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Testimonials
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">
                      Contacts
                    </a>
                  </li>
                  <li>
                    <a className="nav-link disabled" href="#">
                      <i className="fab fa-twitter k" />
                    </a>
                  </li>
                  <li>
                    <a className="nav-link disabled" href="#">
                      <i className="fab fa-facebook-f k" />
                    </a>
                  </li>
                  <li>
                    <a className="nav-link disabled" href="#">
                      <i className="fab fa-github k" />
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="container A">
              <div className="row col-sm-12 ">
                <div className="col-sm-6 c">
                  <h1>
                    Keep Your Files <br />
                    in Sync
                  </h1>
                  <p>
                    Keep your files in sync using the most secure and advanced{" "}
                    <br />
                    solution to date.
                  </p>
                  <button className="bt">
                    <i className="fas fa-download" />
                    <span>Download</span>
                  </button>
                  <div className="ic">
                    <img
                      src="./images/badge-apple-store.png"
                      alt
                      className="s"
                    />
                    <img
                      src="./images/badge-google-play-store.png"
                      alt
                      className="s"
                    />
                  </div>
                </div>
                <div className="col-sm-6 iphone">
                  <img
                    src="./images/iphone-app-mockup.png"
                    alt
                    style={{ width: "50%", marginLeft: "150px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
