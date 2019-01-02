import React, { Component } from 'react'
// import Demo from '../component/Demo';
import Header from '../component/Header';
import Body from '../component/Body';
import Footer from '../component/Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
        {/* <Demo /> */}
      </div>
    );
  }
}
export default Home;
