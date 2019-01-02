import React, { Component } from "react";

class Sample extends Component {
  render() {
    return (
      <div className="container" >
        <div className="screen" style={{height:"800px"}}>
          <div className="content extrusion">
            <h2>Form</h2>
            <form>
              <label htmlFor="username">username</label>
              <input type="text" name="username" placeholder />
              <label htmlFor="password">password</label>
              <input type="password" name="password" placeholder />
              <a href className="forgot">
                forgot?
              </a>
              <input type="submit" defaultValue="Sign In" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Sample;
