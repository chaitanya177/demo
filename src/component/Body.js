import React, { Component } from 'react';

class Body extends Component {
  render() {
    return (
      <div>
        <div className="features">
          <div className="l">
            <div className="fea">
              <h2>Features</h2>
              <hr style={{ color: "rgb(36, 204, 92)", height: "30px" }} />
              <i
                className="fab fa-scribd"
                style={{ fontSize: "48px", color: "rgb(36, 204, 92)" }}
              />
              <h3>Everything Synced</h3>
              <p>
                Quisque mollis mi ac aliquet accumsan. Sed sed dapibus libero.
                Nullam luctus purus duis sensibus signiferumque.
              </p>
              <i
                className="fas fa-server"
                style={{ fontSize: "48px", color: "rgb(36, 204, 92)" }}
              />
              <h3>Security</h3>
              <p>
                Quisque mollis mi ac aliquet accumsan. Sed sed dapibus libero.
                Nullam luctus purus duis sensibus signiferumque.
              </p>
              <i
                className="fas fa-upload"
                style={{ fontSize: "48px", color: "rgb(36, 204, 92)" }}
              />
              <h3>Sharing</h3>
              <p>
                Quisque mollis mi ac aliquet accumsan. Sed sed dapibus libero.
                Nullam luctus purus duis sensibus signiferumque.
              </p>
              <i
                className="fas fa-bezier-curve"
                style={{ fontSize: "48px", color: "rgb(36, 204, 92)" }}
              />
              <h3>Access Anywhere</h3>
              <p>
                Quisque mollis mi ac aliquet accumsan. Sed sed dapibus libero.
                Nullam luctus purus duis sensibus signiferumque.
              </p>
            </div>
          </div>
          <div className="r">
            <div className="mid">
              <img
                src="./images/iphone-app-screenshot (1).png"
                alt
                height="500px"
                width="300px"
              />
            </div>
          </div>
        </div>
        <div className="test container-fluid">
          {/* <h1 > Testimonials</h1> */}
          <div className="t1">
            <img
              src="./images/avatar-1.jpeg"
              alt
              style={{ borderRadius: "300px", marginLeft: "70px" }}
              width={150}
              height={150}
            />
            <h2 style={{ textAlign: "center" }}>Osbourne Tranter</h2>
            <h4 style={{ textAlign: "center" }}> CEO at Megacorp</h4>
            <p style={{ textAlign: "center" }}>
              Vivamus quis ex mattis, gravida erat a, iaculis urna. Proin ac
              eleifend tortor. Nunc in augue eget enim venenatis viverra.
            </p>
          </div>
          <div className="t2">
            <img
              src="./images/avatar-2.jpeg"
              alt
              style={{ borderRadius: "300px", marginLeft: "70px" }}
              width={150}
              height={150}
            />
            <h2 style={{ textAlign: "center" }}>Osbourne Tranter</h2>
            <h4 style={{ textAlign: "center" }}> CEO at Megacorp</h4>
            <p style={{ textAlign: "center" }}>
              Vivamus quis ex mattis, gravida erat a, iaculis urna. Proin ac
              eleifend tortor. Nunc in augue eget enim venenatis viverra.
            </p>
          </div>
          <div className="t3">
            <img
              src="./images/avatar-3.jpeg"
              alt
              style={{ borderRadius: "300px", marginLeft: "70px" }}
              width={150}
              height={150}
            />
            <h2 style={{ textAlign: "center" }}>Osbourne Tranter</h2>
            <h4 style={{ textAlign: "center" }}> CEO at Megacorp</h4>
            <p style={{ textAlign: "center" }}>
              Vivamus quis ex mattis, gravida erat a, iaculis urna. Proin ac
              eleifend tortor. Nunc in augue eget enim venenatis viverra.
            </p>
          </div>
        </div>
        <div className="hea">
          <h2>Latest Posts</h2>
        </div>
        {/* latest posts */}
        <div className="posts container-fluid ">
          <div className="a1">
            <img
              src="./images/card-1.jpg"
              alt
              style={{}}
              width={300}
              height={200}
            />
            <h2 style={{ textAlign: "center" }}>Osbourne Tranter</h2>
            <p style={{ textAlign: "center" }}>
              He seems sinking under the evidence could not only grieve and a
              visit. The father is to bless and placed in his length hid...
            </p>
          </div>
          <div className="a2">
            <img
              src="./images/card-2.jpg"
              alt
              style={{}}
              width={300}
              height={200}
            />
            <h2 style={{ textAlign: "center" }}>Osbourne Tranter</h2>
            <p style={{ textAlign: "center" }}>
              He seems sinking under the evidence could not only grieve and a
              visit. The father is to bless and placed in his length hid...
            </p>
          </div>
          <div className="a3">
            <img
              src="./images/card-3.jpg"
              alt
              style={{}}
              width={300}
              height={200}
            />
            <h2 style={{ textAlign: "center" }}>Osbourne Tranter</h2>
            <p style={{ textAlign: "center" }}>
              He seems sinking under the evidence could not only grieve and a
              visit. The father is to bless and placed in his length hid...
            </p>
          </div>
        </div>
        <div className="news">
          <br />
          <h1>Newsletter</h1>
          <hr width="10%" />
          <br />
          <p style={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            exercitationem voluptatem animi, sequi quis laboriosam perferendis
            sed reiciendis ex doloremque inventore officia quo nostrum delectus
            odio minus repellendus error nesciunt.
          </p>
          <input type="email" placeholder="Email address" className="inp" />
          <button className="bu">Subscribe</button>
        </div>
        <div className="contact">
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n    \n    * {box-sizing: border-box;}\n\n    input[type=text], select {\n      width: 35%;\n      padding: 12px;\n      border: 1px solid #ccc;\n      border-radius: 4px;\n      box-sizing: border-box;\n      margin-top: 6px;\n      margin-bottom: 16px;\n      resize: vertical;\n    }\n    textarea{\n      width: 100%;\n      padding: 12px;\n      border: 1px solid #ccc;\n      border-radius: 4px;\n      box-sizing: border-box;\n      margin-top: 6px;\n      margin-bottom: 16px;\n      resize: vertical;\n    }\n    input[type=submit] {\n      background-color: #4CAF50;\n      color: white;\n      padding: 12px 20px;\n      border: none;\n      border-radius: 4px;\n      cursor: pointer;\n    }\n    \n    input[type=submit]:hover {\n      background-color: #45a049;\n    }\n    \n    .container1 {\n      border-radius: 15px;\n      background-color: #f2f2f2;\n      padding: 20px;\n      width:60%;\n      height:500px;\n    }\n    "
            }}
          />
          <h3 style={{ textAlign: "center" }}>Contact Form</h3>
          <hr width="8%" />
          <div className="container1 container">
            <form>
              <label htmlFor="fname">Full Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Enter Your name.."
              />
              <label htmlFor="lname">Email Address</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your Email.."
              />
              <label htmlFor="subject">Message</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Enter Your Message.."
                style={{ height: "200px" }}
                defaultValue={""}
              />
              <input
                type="submit"
                defaultValue="Send Your Message"
                style={{ borderRadius: "15px" }}
              />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Body;
